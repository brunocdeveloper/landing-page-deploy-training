import styled, { css } from "styled-components";
import {
  borderRadius,
  color,
  fontSize,
  fontWeight,
  height,
  space,
  width,
} from "styled-system";
import { ButtonProps } from "./Button.types";

export const StyledButton: any = styled.button<ButtonProps>`
  ${height};
  ${width};
  ${space};
  ${color};
  ${borderRadius};
  ${fontWeight};
  ${fontSize};

  border-color: transparent;

  :hover {
    opacity: 0.8;
  }
`;
