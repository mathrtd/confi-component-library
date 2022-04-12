import React from "react"
import { iconError } from "../../assets/svg/icon_error";
import { iconSuccess } from "../../assets/svg/icon_success";
import { iconWarning } from "../../assets/svg/icon_warning";

import { ToastContainer } from "./styles"
import { ToastProps } from "./types";

const Toast: React.FC<ToastProps> = ({
  isActive = false,
  elementType = 'success',
  position = 'topRight',
  timeout = 3000,
  ...props
}) => {
  setTimeout(() => {
    isActive = false;
  }, timeout);

  const geticon = () => {
    switch (elementType) {
      case "success":
        return iconSuccess
      case "warning":
        return iconWarning
      case "error":
        return iconError
    }
  }

  if (!isActive) {
    return null;
  }

  return (
    <ToastContainer elementType={elementType} position={position}>
      <div className="toast-content">
        <div className="toast-content-icon">
          {geticon()}
        </div>

        <h5>{props.message}</h5>
      </div>

      <div className="toast-content-timer">
      </div>
      <span></span>
    </ToastContainer>
  )
}

export default Toast;