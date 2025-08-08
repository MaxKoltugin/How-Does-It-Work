import Card from "../../Components/Card/Card";
import Slider from "../../Components/Slider/Slider";
import "./home.css";

const Home = () => {
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
            <img src="/sign.png" alt="sign" className="card-sign-img" />
          </div>
        </div>
        <div className="cards-list-wrapper">
          <ul className="cards-list">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
        </div>
        <div className="cards-watching-more-btn-wrapper">
          <img src="question.svg" alt="" className="question-img" />
          <button className="cards-watching-more-btn">
            <p className="watching-more-btn-text">Смотреть еще</p>
            <img src="watching-more.svg" alt="" className="watching-more-img" />
          </button>
          <img src="sign2.svg" alt="" className="watching-more-sign-img" />
          <img
            src="sign-reverse.svg"
            alt=""
            className="watching-more-sign-reverse-img"
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
            <img src="/duck.png" alt="duck" className="project-about-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
