import styled, { css } from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    display: none;
  }

  span {
    font-size: 1.75rem;
    font-weight: 300;
    line-height: 2.5rem;
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  ${({ mode, theme }) =>
    mode === "dark" &&
    css`
      span {
        color: ${theme.colors.dark};
      }

      svg path {
        fill: ${theme.colors.dark};
      }
    `}
`;
