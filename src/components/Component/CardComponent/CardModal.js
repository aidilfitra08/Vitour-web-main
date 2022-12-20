import React from "react";

export const CardModal = (props) => {
  return props.trigger ? (
    <div className="modal-popup">
      <div className="popup-inner">{props.children}</div>
    </div>
  ) : (
    ""
  );
};
