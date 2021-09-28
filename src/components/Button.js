import React from "react";
import { NavLink } from "react-router-dom";

export default function Button(props) {
  const isUpdate = props.isEdit;

  const submitButton = (
    <button
      value="Submit"
      onClick={(e) => {
        props.onSubmit(e);
      }}
    >
      {" "}
      <NavLink to="/table">Submit</NavLink>
    </button>
  );

  const updateButton = (
    <button
      value="Update"
      onClick={(e) => {
        props.onSubmit(e);
      }}
    >
      Update
    </button>
  );

  return (
    <div className="btn-wrap">
      {!isUpdate && submitButton}
      {isUpdate && updateButton}
      <button
        type="button"
        onClick={(e) => {
          props.resetHandle(e);
        }}
        value="Reset"
        className=""
      >
        Reset
      </button>
    </div>
  );
}
