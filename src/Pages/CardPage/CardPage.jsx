import { useParams, useNavigate } from "react-router-dom";
import { cards } from "../../data/cards";
import UniversalCardPage from "../../Components/UniversalCardPage/UniversalCardPage";
import ScrollToTopButton from "../../Components/ScrollToTopButton/ScrollToTopButton";
import { GoX } from "react-icons/go";
import "./cardPage.css";

const CardPage = () => {
  const navigate = useNavigate();
  const { cardId } = useParams();
  const card = cards.find((card) => card.id === cardId);

  const scrollToTop = () => {
    window.scrollTo({
      top: 880,
      behavior: "smooth",
    });
  };

  const handleNavigateToHome = () => {
    navigate("/");
    setTimeout(scrollToTop, 200);
  };

  if (!card) return <div>Карточка не найдена</div>;

  return (
    <div className="card-page-wrapper">
      <div className="content-wrapper">
        <div className="close-page-wrapper">
          <button className="close-page-button" onClick={handleNavigateToHome}>
            <GoX className="close-img" />
          </button>
        </div>
        <h1 className="card-page-title">{card.name}</h1>
        <div className="card-page-content">
          {card.img1 && (
            <img
              src={card.img1}
              alt=""
              className="img-1 card-page-img non-selectable"
            />
          )}
          <UniversalCardPage card={card} />
        </div>
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default CardPage;
