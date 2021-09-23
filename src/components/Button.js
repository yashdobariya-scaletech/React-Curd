import React from "react";

export default function Button(props) {
  const isUpdate = props.isEdit;
  console.log(isUpdate, "isUpdate");

  const submitButton = (
    <button type="submit" value="Submit" className="">
      Submit
    </button>
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
