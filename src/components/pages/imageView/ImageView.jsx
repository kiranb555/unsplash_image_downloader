import React, { useState } from "react";
import { useLocation } from "react-router";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "../../button";
import Modal from "react-modal";
import "./ImageView.style.scss";

Modal.setAppElement("#root");

const ImageView = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const [spinner, setSpinner] = useState(false);

  const location = useLocation();
  let { data } = location.state;

  console.log(data);

  const spinnerHandler = () => {
    setSpinner(true);

    setTimeout(() => setSpinner(false), 5000);
  };
  return (
    <div className="modal">
      image view page
      <ReactModal
        isOpen={modalOpen}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
        }}
      >
        <Link to={"/"}>
          <FontAwesomeIcon
            icon={faTimesCircle}
            size="2x"
            onClick={() => setModalOpen(false)}
            className="modal_close"
          />
        </Link>
        <div className="modal_people">
          <div
            className="modal_people_img"
            style={{
              backgroundImage: `url(${data.user.profile_image.small})`,
            }}
          ></div>
          <div>
            <div className="modal_people_name">
              <a
                target="_blank"
                href={`${data.user.portfolio_url}`}
                rel="noopener noreferrer"
              >
                {data.user.name}
              </a>
            </div>
            <small>
              <a
                target="_blank"
                href={`${data.user.portfolio_url}`}
                rel="noopener noreferrer"
              >
                @{data.user.instagram_username}
              </a>
            </small>
          </div>
        </div>
        <div
          className="modal_image"
          style={{
            backgroundColor: data.color,
            backgroundImage: `url(${data.urls.regular})`,
          }}
        ></div>
        <div className="modal_button_holder">
          <a
            href={`${data.links.download}?force=true`}
            download
            rel="noopener noreferrer"
          >
            <Button
              text={"Download"}
              spinner={spinner}
              handler={spinnerHandler}
            />
          </a>
        </div>
      </ReactModal>
    </div>
  );
};

export default ImageView;
