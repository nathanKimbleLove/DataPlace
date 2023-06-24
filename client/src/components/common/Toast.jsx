import React from "react";
import classes from "./Toast.module.css";
import { Toast as BToast } from "react-bootstrap";
import "./toast.css";
import Error from "../../assets/icons/exclamation-circle.svg";
import Warning from "../../assets/icons/exclamation-triangle.svg";
import Success from "../../assets/icons/check-circle.svg";
import Info from "../../assets/icons/info-circle.svg";

export const Toast = (props) => {
  let styling, title, icon;

  switch (props.type) {
    case "success":
      title = "Success";
      styling = classes.success;
      icon = <img src={Success} height={24} width={24}/>
      break;
    case "error":
      title = "Error";
      styling = classes.error;
      icon = <img src={Error} height={24} width={24}/>
      break;
    case "warning":
      title = "Warning";
      styling = classes.warning;
      icon = <img src={Warning} height={24} width={24}/>
      break;
    default:
      title = "Info";
      styling = classes.info;
      icon = <img src={Info} height={24} width={24}/>
      break;
  }

  return (
    <BToast
      onClose={props.onClose}
      position="top-end"
      delay={props.type === "error" || props.type === "Info" ? 10000 : 4000}
      autohide
      className={classes.toast}
    >
      <div
        className={classes.toastIcon}
      >
        {icon}
      </div>
      <div>
        <BToast.Header>
          <span className={styling}>{title}</span>
        </BToast.Header>
        <BToast.Body>
          <span className={styling}>{props.text}</span>
        </BToast.Body>
      </div>
    </BToast>
  );
};
