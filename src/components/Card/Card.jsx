import { ImageStatus } from "../index";
import "./Card.css";

function Card(props) {
  return (
    <div className="cardContainer" onClick={props.handleClick}>
      <ImageStatus isSuperHost={props.isSuperHost} imageUrl={props.imageUrl} />
      <p>{props.texto}</p>
    </div>
  );
}

export default Card;
