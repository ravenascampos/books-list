import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

export const Login = () => {
  return (
    <>
      <Header mode="light" />
      <h1>Login</h1>
      <Link to={"/home"}>Home</Link>
    </>
  );
};
