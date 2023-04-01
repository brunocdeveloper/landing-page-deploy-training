import Box from "../box/Box";
import Text from "../text/Text";
import Button from "../button/Button";
import { Navbar } from "./Header.style";
import { useState } from "react";
import { HeaderProps } from "./Header.types";
import CloseIcon from "../../assets/CloseIcon";
import { theme } from "../../theme/theme";

const Header = (props: HeaderProps) => {
  const {
    logo,
    reverse,
    divider,
    beforeDivider,
    afterDivider,
    boxOptions,
    buttonOptions,
    renderButton,
    burguerIcon,
    ...rest
  } = props;
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  const handleVisibleMenu = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };

  const BeforeDivider: any = () => {
    if (Array.isArray(beforeDivider)) {
      return beforeDivider.map((texts) => (
        <Text
          mb={isVisibleMenu ? 16 : 0}
          hover
          text={texts.text}
          color={isVisibleMenu ? texts.textColorMenuMobile : texts.color}
          fontSize={texts.fontSize}
          fontWeight={texts.fontWeight}
          onClick={texts.onClick}
          className={isVisibleMenu ? "" : "desktop"}
        />
      ));
    }

    return beforeDivider;
  };

  const AfterDivider: any = () => {
    if (Array.isArray(afterDivider)) {
      return afterDivider.map((texts) => (
        <Text
          mb={isVisibleMenu ? 16 : 0}
          hover
          text={texts.text}
          color={isVisibleMenu ? texts.textColorMenuMobile : texts.color}
          fontSize={texts.fontSize}
          fontWeight={texts.fontWeight}
          onClick={texts.onClick}
          className={isVisibleMenu ? "" : "desktop"}
        />
      ));
    }

    return afterDivider;
  };

  const RenderButton: any = () => {
    if (buttonOptions) {
      return (
        <Button
          onClick={buttonOptions?.onClick}
          text={buttonOptions.text}
          backgroundColor={buttonOptions.background}
          borderRadius={buttonOptions.borderRadius}
          width={buttonOptions.width}
          height={buttonOptions.height}
          color={buttonOptions.colorText}
          fontWeight={buttonOptions.fontWeight}
          fontSize={buttonOptions.fontSize}
          className={isVisibleMenu ? "" : "desktop"}
        />
      );
    }

    if (renderButton) {
      return renderButton;
    }
  };

  return (
    <Navbar reverse={reverse} {...rest}>
      <Box
        opacityOnHover
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        {logo && logo}
      </Box>
      <Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          backgroundColor={boxOptions?.background}
          width={boxOptions?.width}
          height={boxOptions?.height}
          className="desktop"
        >
          <BeforeDivider />
          {divider && (
            <Box
              backgroundColor={divider.color}
              height={divider.height}
              width={divider.width}
              className="desktop"
            />
          )}
          <AfterDivider />
          <RenderButton />
        </Box>
        <Box
          className="mobile"
          display="flex"
          alignItems="center"
          opacityOnHover
          onClick={handleVisibleMenu}
        >
          <Box className="mobile">{burguerIcon && burguerIcon}</Box>
        </Box>
      </Box>
      {isVisibleMenu && (
        <Box
          position="absolute"
          backgroundColor="#EDFAF2"
          width={300}
          top={0}
          right={0}
          display="flex"
          flexDirection="column"
          padding={24}
          className="mobile"
        >
          <Box
            mb={36}
            display="flex"
            justifyContent="flex-end"
            opacityOnHover
            onClick={handleVisibleMenu}
          >
            <CloseIcon />
          </Box>
          <BeforeDivider />
          <AfterDivider />
          <Box display="flex" justifyContent="center" mt={24}>
            <RenderButton />
          </Box>
        </Box>
      )}
    </Navbar>
  );
};

export default Header;
