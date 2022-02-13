import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import * as S from "./Home.style";

export const Home = () => {
  return (
    <S.Container>
      <Header mode="dark" />
      <h1>Home</h1>
      <Link to={"/"}>Login</Link>
    </S.Container>
  );
};
