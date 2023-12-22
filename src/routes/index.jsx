import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { PrivateRoutes } from "./privatesRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/home" element={<PrivateRoutes />}>
          <Route path="/home" exact element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};
