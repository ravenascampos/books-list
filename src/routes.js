import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Routes as Switch, Route } from "react-router-dom";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Switch>
  );
};
