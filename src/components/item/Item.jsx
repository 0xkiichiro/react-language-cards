import "./Item.css";
import { useState } from "react";

const Item = ({ props }) => {
  const [show, setShow] = useState(false);

  //   const handleClick = () => {
  //     setShow(!show);
  //   };

  const { name, img, options } = props;
  return (
    <div className="card" onClick={() => setShow(!show)}>
      {show ? (
        <ul className="list">
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      ) : (
        <>
          <img className="card-logo" src={img} alt="lang-logo" />{" "}
          <h3 className="card-title">{name}</h3>
        </>
      )}
    </div>
  );
};

export default Item;
