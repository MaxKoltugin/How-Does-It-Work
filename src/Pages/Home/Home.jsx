import { useState } from "react";
import Card from "../../Components/Card/Card";
import Slider from "../../Components/Slider/Slider";
import ScrollToTopButton from "../../Components/ScrollToTopButton/ScrollToTopButton";
import { cards } from "../../data/cards";
import "./home.css";

const Home = () => {
  const [showExtraCards, setShowExtraCards] = useState(false);
  // const { cards } = useCard();

  const shouldShowCard = (index) => {
    return index < 8 || showExtraCards;
  };

  return (
    <div className="home-wrapper">
      <div className="slider-wrapper">
        <Slider />
      </div>
      <div className="main-text-wrapper">
        <p className="main-text">
          Вы когда-нибудь задумывались, как устроены спецэффекты в кино? Или как
          создают лего? Эти и многие другие вопросы вы сможете узнать на нашем
          сайте!
        </p>
      </div>
      <div className="cards-wrapper">
        <div className="cards-title-wrapper">
          <h2 className="cards-title">Откройте для себя что-то новое!</h2>
          <div className="cards-sign-wrapper">
            <img
              src="/signs/sign.png"
              alt="sign"
              className="card-sign-img non-selectable"
            />
          </div>
        </div>
        <div className="cards-list-wrapper">
          <ul className="cards-list">
            {cards.map((card, index) => (
              <Card
                key={card.id}
                isVisible={shouldShowCard(index)}
                delay={0.05 + index * 0.05}
                img={card.img}
                text={card.name}
                id={card.id}
                type={card.type}
              />
            ))}
          </ul>
        </div>
        <div className="cards-watching-more-btn-wrapper">
          <img
            src="/signs/question.svg"
            alt=""
            className="question-img non-selectable"
          />
          <button
            onClick={() => setShowExtraCards(!showExtraCards)}
            className="cards-watching-more-btn"
          >
            {!showExtraCards ? (
              <>
                <p className="watching-more-btn-text">Смотреть еще</p>
                <img
                  src="/icons/watching-more.svg"
                  alt=""
                  className="watching-more-img non-selectable"
                />
              </>
            ) : (
              <>
                <p className="watching-more-btn-text">Скрыть</p>
                <img
                  src="/icons/hide.svg"
                  alt=""
                  className="watching-more-img non-selectable"
                />
              </>
            )}
          </button>
          <img
            src="/signs/sign2.svg"
            alt=""
            className="watching-more-sign-img non-selectable"
          />
          <img
            src="/signs/sign-reverse.svg"
            alt=""
            className="watching-more-sign-reverse-img non-selectable"
          />
        </div>
        <div className="project-about-wrapper">
          <p className="project-about-title">О проекте</p>
          <div className="project-about-blocks-wrapper">
            <div className="project-about-block project-about-block1">
              <p className="project-about-text">
                Доступ к самой интересной информации.
              </p>
            </div>
            <div className="project-about-block project-about-block2">
              <p className="project-about-text">
                Платформа для познания, как устроена окружающая среда.
              </p>
            </div>
            <div className="project-about-block project-about-block3">
              <p className="project-about-text">
                Здесь собраны детальные разборы с картинками, которые редко
                встречаются в открытых источниках.
              </p>
            </div>
            <img
              src="/signs/duck2.png"
              alt="duck"
              className="project-about-img non-selectable"
            />
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
