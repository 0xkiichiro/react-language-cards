import Item from "../item/Item";
import "./Card.css";
import { languages } from "../../helpers/data";

const Card = () => {
  return (
    <div className="card-area-container">
      {/* <div className="bars"></div> */}
      <h1 className="language-title">Languages</h1>
      <div className="cards-container">
        {languages.map((item) => {
          return <Item props={item} />;
        })}
      </div>
    </div>
  );
};

export default Card;
