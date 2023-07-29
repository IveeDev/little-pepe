import React from "react";
import "./Form.scss";

const Form = () => {
  return (
    <form className="form">
      <div className="container">
        <div className="form__group">
          <label htmlFor="" className="form__label">
            Referal(optional)
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Enter referal link"
          />
        </div>

        <div className="form__group">
          <button className="btn">Claim Airdrop</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
