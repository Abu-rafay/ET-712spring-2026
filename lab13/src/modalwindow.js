import React from "react";
import "./App.css";

const Modalwindow = function() {

  const closemodalwindow = () => {
    document.querySelector(".modalwindow").style.display = "none";
  };

  const collectcomment = () => {
    const input = document.querySelector(".commentarea");
    const list = document.querySelector(".commentlist");
    const username = document.querySelector(".modalusername").textContent;
    const date = new Date().toLocaleDateString();

    if (input.value === "") {
      alert("Type something first");
      return;
    }

    list.innerHTML += `
      <li>
        <b>${username}:</b> ${input.value}
        <span class="posteddate"> (${date})</span>
      </li>
    `;

    input.value = "";
    document.querySelector(".modalwindow").style.display = "none";
  };

  return (
    <section className="modalwindow">
      <div className="modalcontent">
        <header className="modalheader">
          <p>
            Add Feedback <span className="modalusername"></span>
          </p>
          <p className="closemodal" onClick={closemodalwindow}>X</p>
        </header>

        <input
          className="commentarea"
          type="text"
          placeholder="Type your comments..."
        />

        <button className="btnpostfeedback" onClick={collectcomment}>
          Post Feedback
        </button>
      </div>
    </section>
  );
};

export default Modalwindow;