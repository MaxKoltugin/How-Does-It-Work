import { useState } from "react";
import Card from "../../Components/Card/Card";
import Slider from "../../Components/Slider/Slider";
import "./home.css";

const Home = () => {
  const [showExtraCards, setShowExtraCards] = useState(false);

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
          Вы когда-нибудь задумались, как устроена сеть водяного потока в
          аквапарке? Или как работают беспроводные наушники? На эти и многие
          другие вопросы вы можете узнать ответы на нашеи сайте!
        </p>
      </div>
      <div className="cards-wrapper">
        <div className="cards-title-wrapper">
          <h2 className="cards-title">Откройте для себя что-то новое!</h2>
          <div className="cards-sign-wrapper">
            <img
              src="https://maxkoltugin.github.io/How-Does-It-Work/signs/sign.png"
              alt="sign"
              className="card-sign-img non-selectable"
            />
          </div>
        </div>
        <div className="cards-list-wrapper">
          <ul className="cards-list">
            <Card
              isVisible={shouldShowCard(0)}
              delay={0.05}
              img={
                "https://maxkoltugin.github.io/How-Does-It-Work/cards-img/cinema-card.svg"
              }
              text={"Как устроены спецэффеты в кино?"}
            />
            <Card
              isVisible={shouldShowCard(1)}
              delay={0.1}
              img={
                "https://maxkoltugin.github.io/How-Does-It-Work/cards-img/lego-card.svg"
              }
              text={"Как устроено производство кирпичеков лего?"}
            />
            <Card
              isVisible={shouldShowCard(2)}
              delay={0.15}
              img={
                "https://maxkoltugin.github.io/How-Does-It-Work/cards-img/plant-card.svg"
              }
              text={"Кто такая Венерина мухоловка?"}
            />
            <Card
              isVisible={shouldShowCard(3)}
              delay={0.2}
              img={
                "https://maxkoltugin.github.io/How-Does-It-Work/cards-img/car-card.svg"
              }
              text={"Как устроен болид F1?"}
            />
            <Card
              isVisible={shouldShowCard(4)}
              delay={0.25}
              img={
                "https://maxkoltugin.github.io/How-Does-It-Work/cards-img/cloud-card.svg"
              }
              text={"Как устроена машина по созданию облаков?"}
            />
            <Card
              isVisible={shouldShowCard(5)}
              delay={0.3}
              img={
                "https://maxkoltugin.github.io/How-Does-It-Work/cards-img/fighter-card.svg"
              }
              text={"Как устроена посадка на авианосец?"}
            />
            <Card
              isVisible={shouldShowCard(6)}
              delay={0.35}
              img={
                "https://maxkoltugin.github.io/How-Does-It-Work/cards-img/fireball-card.svg"
              }
              text={"Что такое шаровая молния?"}
            />
            <Card
              isVisible={shouldShowCard(7)}
              delay={0.4}
              img={
                "https://maxkoltugin.github.io/How-Does-It-Work/cards-img/money-card.svg"
              }
              text={"Как печатают деньги?"}
            />

            <Card
              isVisible={shouldShowCard(8)}
              delay={0.05}
              img={
                "https://maxkoltugin.github.io/How-Does-It-Work/cards-img/plane-passenger-card.svg"
              }
              text={"Как устроена заправка в воздухе?"}
            />
            <Card
              isVisible={shouldShowCard(9)}
              delay={0.1}
              img={
                "https://maxkoltugin.github.io/How-Does-It-Work/cards-img/breakfast-card.svg"
              }
              text={"Как создают сухие завтраки?"}
            />
            <Card
              isVisible={shouldShowCard(10)}
              delay={0.15}
              img={
                "https://maxkoltugin.github.io/How-Does-It-Work/cards-img/aerotube-card.svg"
              }
              text={"Как устроены аэротруба?"}
            />
            <Card
              isVisible={shouldShowCard(11)}
              delay={0.2}
              img={
                "https://maxkoltugin.github.io/How-Does-It-Work/cards-img/baggage-card.svg"
              }
              text={"Как устроен маршрут вашего чемодана?"}
            />
            <Card
              isVisible={shouldShowCard(12)}
              delay={0.25}
              img={
                "https://maxkoltugin.github.io/How-Does-It-Work/cards-img/qr-code-card.svg"
              }
              text={"Как устроены QR-коды?"}
            />
            <Card
              isVisible={shouldShowCard(13)}
              delay={0.3}
              img={
                "https://maxkoltugin.github.io/How-Does-It-Work/cards-img/pigone-card.svg"
              }
              text={"Как голуби доставляют почту?"}
            />
            <Card
              isVisible={shouldShowCard(14)}
              delay={0.35}
              img={
                "https://maxkoltugin.github.io/How-Does-It-Work/cards-img/metro-card.svg"
              }
              text={"Как устроено депо метро?"}
            />
          </ul>
        </div>
        <div className="cards-watching-more-btn-wrapper">
          <img
            src="https://maxkoltugin.github.io/How-Does-It-Work/signs/question.svg"
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
                  src="https://maxkoltugin.github.io/How-Does-It-Work/icons/watching-more.svg"
                  alt=""
                  className="watching-more-img non-selectable"
                />
              </>
            ) : (
              <>
                <p className="watching-more-btn-text">Скрыть</p>
                <img
                  src="https://maxkoltugin.github.io/How-Does-It-Work/icons/hide.svg"
                  alt=""
                  className="watching-more-img non-selectable"
                />
              </>
            )}
          </button>
          <img
            src="https://maxkoltugin.github.io/How-Does-It-Work/signs/sign2.svg"
            alt=""
            className="watching-more-sign-img non-selectable"
          />
          <img
            src="https://maxkoltugin.github.io/How-Does-It-Work/signs/sign-reverse.svg"
            alt=""
            className="watching-more-sign-reverse-img non-selectable"
          />
        </div>
        <div className="project-about-wrapper">
          <p className="project-about-title">О проекте</p>
          <div className="project-about-blocks-wrapper">
            <div className="project-about-block project-about-block1">
              <p className="project-about-text">
                Доступ к самой интересной информации
              </p>
            </div>
            <div className="project-about-block project-about-block2">
              <p className="project-about-text">
                Платформа для познания, как устроена окружающая среда
              </p>
            </div>
            <div className="project-about-block project-about-block3">
              <p className="project-about-text">
                Здесь собраны детальные разборы с картинками, которые редко
                встречаются в открытых источниках.
              </p>
            </div>
            <img
              src="https://maxkoltugin.github.io/How-Does-It-Work/signs/duck.png"
              alt="duck"
              className="project-about-img non-selectable"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
