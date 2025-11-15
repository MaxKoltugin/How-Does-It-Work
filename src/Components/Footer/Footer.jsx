import "./footer.css";

const Footer = () => {
  const shareData = {
    // title: "Как это устроенно?",
    url: "https://how-does-it-work.ru/",
  };

  const handleShareW = () => {
    const text = `${shareData.url}`;
    const encodedText = encodeURIComponent(text);

    const isWindows = navigator.userAgent.includes("Windows");
    const isMac = navigator.userAgent.includes("Macintosh");

    if (isWindows || isMac) {
      window.open(`whatsapp://send?text=${encodedText}`);
      setTimeout(() => {
        window.open(`https://web.whatsapp.com/send?text=${encodedText}`);
      }, 1000);
    } else if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
      window.location.href = `whatsapp://send?text=${encodedText}`;
    } else {
      window.open(`https://web.whatsapp.com/send?text=${encodedText}`);
    }
  };

  const handleShareTg = () => {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(shareData.url)}`
    );
  };

  const handleShareVK = () => {
    window.open(
      `https://vk.com/share.php?url=${encodeURIComponent(shareData.url)}`
    );
  };

  return (
    <div className="footer">
      <div className="footer-contact-wrapper">
        <div className="footer-logo-wrapper non-selectable">
          <img
            className="footer-logo non-selectable"
            src={"/logo-max.png"}
            alt=""
          />
        </div>
        <div className="feedback-wrapper">
          <p className="feedback">
            <span>Связаться со мной -&nbsp;</span>{" "}
            <a href="mailto:dkoltugin@mail.ru" className="email">
              dkoltugin@mail.ru
            </a>
          </p>
        </div>
        <div className="share-wrapper">
          <p className="share-text">Поделиться</p>
          <div className="share-buttons">
            <button
              className="vk-btn non-selectable"
              title="share to vk"
              onClick={handleShareVK}
            >
              <img
                className="vk non-selectable"
                src="/icons/vk.svg"
                alt="vk"
              />
            </button>
            <button
              className="wp-btn non-selectable"
              title="share to whatsapp"
              onClick={handleShareW}
            >
              <img
                className="wp non-selectable"
                src="/icons/wp.svg"
                alt="whatsapp"
              />
            </button>
            <button
              className="tg-btn non-selectable"
              title="share to telegram"
              onClick={handleShareTg}
            >
              <img
                className="tg non-selectable"
                src="/icons/tg.svg"
                alt="tg"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="footer-data-publisher">
        <p>
          <span className="publisher-text">Дата публикации</span> - 12.02.2025
        </p>
      </div>
    </div>
  );
};

export default Footer;
