import "./footer.css";

const Footer = () => {
  const shareData = {
    title: "Как это устроенно?",
    url: "https://maxkoltugin.github.io/gift-for-ilya/",
  };

  // WhatsApp (с проверкой на мобильные устройства)
  const handleShareW = () => {
    const text = `${shareData.title}\n${shareData.url}`;
    if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
      window.open(`whatsapp://send?text=${encodeURIComponent(text)}`);
    } else {
      window.open(
        `https://web.whatsapp.com/send?text=${encodeURIComponent(text)}`
      );
    }
  };

  // Telegram
  const handleShareTg = () => {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(
        shareData.url
      )}&text=${encodeURIComponent(shareData.title)}`
    );
  };

  // VK
  const handleShareVK = () => {
    window.open(
      `https://vk.com/share.php?url=${encodeURIComponent(
        shareData.url
      )}&title=${encodeURIComponent(shareData.title)}`
    );
  };

  return (
    <div className="footer">
      <div className="footer-logo-wrapper">
        <img className="footer-logo" src={"/logo-max.png"} alt="" />
      </div>
      <div className="feedback-wrapper">
        <p className="feedback">
          Связаться со мной -{" "}
          <a href="mailto:dkoltugin@mail.ru" className="email">
            dkoltugin@mail.ru
          </a>
        </p>
      </div>
      <div className="share-wrapper">
        <p className="share-text">Поделиться</p>
        <div className="share-buttons">
          <button className="vk-btn" title="share to vk" onClick={handleShareVK}>
            <img className="vk" src="/vk.png" alt="vk" />
          </button>
          <button
            className="wp-btn"
            title="share to whatsapp"
            onClick={handleShareW}
          >
            <img className="wp" src="/wp.png" alt="whatsapp" />
          </button>
          <button
            className="tg-btn"
            title="share to telegram"
            onClick={handleShareTg}
          >
            <img className="tg" src="/tg.png" alt="tg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
