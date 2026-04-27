import React from "react";
import { Link } from "react-router-dom";
import introimg from "../images/intro.jpg";

const Home = function () {
  return (
    <>
      <header className="header">
        <h1 className="headarticle">Homepage</h1>
      </header>

      <main className="maincontainer">
        <div>
          <img src={introimg} alt="QCC campus" />
        </div>

        <section className="cardcontainer">
          <Link to="/about" className="card">
            <h2>About Page</h2>
            <p>Click here to learn more about this website.</p>
          </Link>

          <Link to="/contact" className="card">
            <h2>Contact Page</h2>
            <p>Click here to go to the contact page.</p>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;