import React from "react";
import ReactDOM from "react-dom";
import "./Popup.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.close} />;
};

const Overlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Popup = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop close={props.close} />, portalElement)}
      {ReactDOM.createPortal(
        <Overlay>
          <iframe
            width="560"
            height="315"
            className="video"
            src="https://www.youtube.com/embed/Jqf9haCd6mM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Overlay>,
        portalElement
      )}
    </>
  );
};
export default Popup;
