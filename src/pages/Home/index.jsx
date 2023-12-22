import React, { useContext } from "react";
import "./styles.css";
import { AuthContext } from "../../context/auth";

export const Home = () => {
  const { signOut, user } = useContext(AuthContext);

  return (
    <div className="welcome-field">
      <div className="central-field">
        <div className="wrap-welcome">
          <p>Olá, {user.email}!</p>
          <button className="signout-btn" onClick={signOut}>
            SignOut
          </button>
        </div>
      </div>
    </div>
  );
};
