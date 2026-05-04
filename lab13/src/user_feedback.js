import React from "react";
import "./App.css";

const User_feedback = function(props) {

  const openmodalwindow = () => {
    const modal = document.querySelector(".modalwindow");
    modal.style.display = "block";

    const username = document.querySelector(".modalusername");
    username.innerHTML = `<i>${props.username}</i>`;
  };

  return (
    <section className="feedbackcard">
      <div className="content">
        <p>{props.username}</p>
      </div>

      <div className="description">
        {props.children}
      </div>

      <div className="cardfooter">
        <p className="addicon" onClick={openmodalwindow}>
          <span>&#10011;</span> Add Feedback
        </p>
      </div>
    </section>
  );
};

export default User_feedback;