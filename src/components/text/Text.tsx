import React from "react";
import { StyledText } from "./Text.styles";
import { TextProps } from "./Text.types";

const Text = (props: TextProps) => {
  const { children, text, ...rest } = props;
  return <StyledText {...rest}>{text || children}</StyledText>;
};

export default Text;
