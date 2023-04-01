import React from "react";
import { PaddingProps } from "styled-system";

export interface HeaderProps extends PaddingProps {
  logo?: React.ReactNode;
  reverse?: boolean;
  boxOptions?: {
    height?: number;
    width?: number;
    background?: string;
  };
  divider?: {
    color: string;
    width: number;
    height: number;
  };
  beforeDivider?:
    | {
        text?: string;
        color?: string;
        fontSize?: number;
        fontWeight?: number;
        onClick?: () => void;
        textColorMenuMobile?: string;
      }[]
    | React.ReactNode;
  afterDivider?:
    | {
        text?: string;
        color?: string;
        fontSize?: number;
        fontWeight?: number;
        onClick?: () => void;
        textColorMenuMobile?: string;
      }[]
    | React.ReactNode;
  buttonOptions?: {
    colorText?: string;
    fontWeight?: number;
    borderRadius?: number;
    fontSize?: number;
    text?: string;
    background?: string;
    width?: number;
    height?: number;
    onClick?: () => void;
  };
  renderButton?: React.ReactNode;
  mediaMaxWidth?: number;
  mediaMinWidth?: number;
  burguerIcon?: React.ReactNode;
}
