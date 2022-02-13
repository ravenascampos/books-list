import { useState } from "react";
import * as S from "./Header.style";
import whiteLogo from "../../assets/white-logo.svg";
import darkLogo from "../../assets/dark-logo.svg";

export const Header = ({ mode = "light", user = null }) => {
  return (
    <S.Container>
      <S.Logo mode={mode}>
        <img src={mode === "dark" ? darkLogo : whiteLogo} alt="logo ioasys" />
        <span>Books</span>
      </S.Logo>
    </S.Container>
  );
};
