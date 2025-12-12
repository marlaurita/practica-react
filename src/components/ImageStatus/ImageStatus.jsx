import hosp from "../../assets/images/hospedaje.jpg";
import "./ImageStatus.css";

function ImageStatus(props) {
  return (
    <div>
      {props.isSuperHost === true && (
        <div className="tip">
          <p>Superanfitrión</p>
        </div>
      )}
      <img className="image-div" src={hosp}></img>
    </div>
  );
}

export default ImageStatus;
