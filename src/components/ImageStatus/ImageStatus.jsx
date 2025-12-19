import "./ImageStatus.css";
import imageDefault from "./../../assets/images/image-default.png";

function ImageStatus(props) {
  return (
    <div>
      {props.isSuperHost === true && (
        <div className="tip">
          <p>Superanfitrión</p>
        </div>
      )}
      {props.imageUrl ? (
        <img className="image-div" src={props.imageUrl}></img>
      ) : (
        <img className="image-div" src={imageDefault}></img>
      )}
    </div>
  );
}

export default ImageStatus;
