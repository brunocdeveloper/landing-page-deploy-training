import styled, { css } from "styled-components";
import {
  border,
  borderColor,
  borderRadius,
  color,
  fontSize,
  fontWeight,
  height,
  maxHeight,
  space,
  width,
} from "styled-system";
import { InputProps } from "./Input.types";

export const InputText: any = styled.input<InputProps>`
  ${maxHeight};
  ${width};
  ${space};
  ${color};
  ${borderRadius};
  ${fontWeight};
  ${fontSize};
  ${height};
`;

export const Label = styled.p`
  ${fontSize};
`;
