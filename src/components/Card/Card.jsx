import { ImageStatus } from "../index";

function Card(props) {
  return (
    <div style={{ border: "1px red solid" }}>
      <ImageStatus isSuperHost={false} />
      <p>{props.texto}</p>
    </div>
  );
}

export default Card;
