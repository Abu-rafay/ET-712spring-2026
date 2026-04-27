import React from "react";

const About = function () {
  return (
    <>
      <header className="header">
        <h1 className="headarticle">About Us</h1>
      </header>

      <main className="maincontainer pagebox">
        <p>
          This is the about page for my React routing lab. This page shows that
          React Router can move between pages without refreshing the browser.
        </p>
      </main>
    </>
  );
};

export default About;