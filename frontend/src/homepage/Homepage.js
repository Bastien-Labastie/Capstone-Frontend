import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import UserContext from "../auth/UserContext";

function Homepage() {
  const { currentUser } = useContext(UserContext);
  console.debug("Homepage", "currentUser=", currentUser);

  return (
      <div className="Homepage">
        <div className="container text-center">
          <h1 className="mb-4 font-weight-bold">Dungeons and Dragons 5e Spells</h1>
          <p className="lead">All the 5e Spells in one, convenient place.</p>
          {currentUser
              ? <h2>
                Welcome Back Adventurer! {currentUser.firstName || currentUser.username}!
              </h2>
              : (
                  <p>
                    <Link className="btn btn-primary font-weight-bold mr-3"
                          to="/login">
                      Log in
                    </Link>
                    <Link className="btn btn-primary font-weight-bold"
                          to="/signup">
                      Sign up
                    </Link>
                  </p>
              )}
        </div>
      </div>
  );
}

export default Homepage;
