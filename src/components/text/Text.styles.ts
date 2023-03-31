import styled, { css } from "styled-components";
import {
  color,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign,
  width,
} from "styled-system";

interface Text {
  hover: boolean;
}

export const StyledText: any = styled.p<Text>`
  ${display};
  ${space};
  ${width};
  ${lineHeight};
  ${color};
  ${fontSize};
  ${fontWeight};
  ${textAlign};
  font-family: "Inter", sans-serif;
  transition: color 0.2s ease-in-out;

  ${(props) =>
    props.hover &&
    css`
      :hover {
        opacity: 0.7;
        cursor: pointer;
      }
    `}
`;
