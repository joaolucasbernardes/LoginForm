import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutComponents } from "../../components/LayoutComponents";
import { api } from "../../services/api";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSaveUser = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };

    const response = await api.post("/create", data);
    console.log(response.data);
  };

  return (
    <LayoutComponents>
      <form onSubmit={handleSaveUser} className="login-form">
        <span className="login-form-title">Criar Conta</span>

        <span className="login-form-title">
          <p className="logo">ENTERPRISE</p>
        </span>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Name"></span>
        </div>

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
            CRIAR CONTA
          </button>
        </div>

        <div className="text-center">
          <span className="text1">Já possui conta?</span>

          <Link className="text2" to="/">
            Faça Login
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
