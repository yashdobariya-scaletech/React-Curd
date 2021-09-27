import React from "react";
import { NavLink } from "react-router-dom";

export default function Button(props) {
  const isUpdate = props.isEdit;

  const submitButton = (
    // <NavLink to="/table">
    <button type="submit" value="Submit" className="">
      Submit
    </button>
    // </NavLink>
  );

  const updateButton = (
    <button type="submit" value="update" className="">
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
