import React from "react";
import "./App.css";

const User_feedback = function(props) {
  return (
    <>
      <section className="feedbackcard">
        {props.children}

        <div className="feedbackcontent">
          <p>Name of user</p>
        </div>

        <div className="desccription">Some feedback</div>

        <div className="cardfooter">
          <p>
            <span>&#10011;</span> Add Feedback
          </p>
        </div>
      </section>
    </>
  );
};

export default User_feedback;