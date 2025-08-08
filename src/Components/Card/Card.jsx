import "./card.css";

const Card = () => {
  return (
    <li className="card">
      <div className="card-img-wrapper">
        <img src="" alt="" className="card-img" />
      </div>
      <div className="card-text-wrapper">
        <p className="card-title"></p>
        <p className="card-text"></p>
      </div>
    </li>
  );
};

export default Card;
