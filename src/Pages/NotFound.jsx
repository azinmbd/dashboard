import React from "react";
import { withRouter } from "react-router-dom";
import error from "../asset/img/404.svg";
const NotFound = (props) => {
  return (
    <div className="content-width d-flex flex-column align-items-center pageNotFound text-center">
      <img src={error} alt="" width="60%" />
      <span>متاسفانه صفحه مورد نظر یافت نشد.</span>
      <button className="btn mt-5" onClick={() => props.history.goBack()}>
        بازگشت
      </button>
    </div>
  );
};

export default withRouter(NotFound);
