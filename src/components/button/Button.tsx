import React from "react";
import Text from "../text/Text";
import { StyledButton } from "./Button.style";
import { ButtonProps } from "./Button.types";
import Box from "../box/Box";

const Button = (props: ButtonProps) => {
  const { text, loading, children, fontWeight, fontSize, ...rest } = props;
  return (
    <StyledButton {...rest}>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Text text={text} fontWeight={fontWeight} fontSize={fontSize} />
        {children && children}
        {loading && <Box ml="12px">{loading}</Box>}
      </Box>
    </StyledButton>
  );
};

export default Button;
