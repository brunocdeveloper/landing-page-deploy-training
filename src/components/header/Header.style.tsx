import styled, { css } from "styled-components";
import { HeaderProps } from "./Header.types";
import { padding } from "styled-system";

export const Navbar = styled.div<HeaderProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${padding};

  ${(props) =>
    props.reverse &&
    css`
      -webkit-flex-direction: row-reverse;
      flex-direction: row-reverse;
    `}

  ${({ mediaMaxWidth, mediaMinWidth }) =>
    mediaMaxWidth &&
    mediaMinWidth &&
    css`
      @media (max-width: ${mediaMaxWidth}px) {
        .desktop {
          display: none;
        }

        padding: 24px;
      }

      @media (min-width: ${mediaMinWidth}px) {
        .mobile {
          display: none;
        }
      }
    `}
`;
