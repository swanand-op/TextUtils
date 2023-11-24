import React from 'react'

function Alert(props) {

  return (
    props.alert && (
      <div
        className={`alert alert-dismissible fade show`}
        role="alert"
        style={{ color: props.mode === "light" ? "white" : "black" }}
      >
        <strong>{props.alert.type}</strong>: {props.alert.message}
      </div>
    )
  );
}

export default Alert
