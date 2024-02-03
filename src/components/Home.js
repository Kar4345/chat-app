import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        {/* <h1>This is start page of this project!!!</h1> */}
        <h1>Welcome to MyChat App!</h1>
      </div>
      <div id="intButton">
        <Link to={'/signup'}>
          <button id="start">Get Started</button>
        </Link>
        <Link to={'/login'}>
          <button id="log">Log in</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
