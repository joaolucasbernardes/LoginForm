import React from "react";
import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { LayoutComponents } from "../../components/LayoutComponents";
import { AuthContext } from "../../context/auth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, signed } = useContext(AuthContext);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    await signIn(data);
  };

  if (signed) {
    return <Navigate to="/home" />;
  } else {
    return (
      <LayoutComponents>
        <form onSubmit={handleSignIn} className="login-form">
          <span className="login-form-title">Bem Vindo!</span>

          <span className="login-form-title">
            <p className="logo">ENTERPRISE</p>
          </span>

          <div className="wrap-input">
            <input
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>

          <div className="wrap-input">
            <input
              className={password !== "" ? "has-val input" : "input"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Password"></span>
          </div>

          <div className="container-login-form-btn">
            <button type="submit" className="login-form-btn">
              LOGIN
            </button>
          </div>

          <div className="text-center">
            <span className="text1">Não possui conta?</span>

            <Link className="text2" to="/register">
              Criar conta
            </Link>
          </div>
        </form>
      </LayoutComponents>
    );
  }
};
