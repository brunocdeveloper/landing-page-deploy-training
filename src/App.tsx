import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyle } from "./theme/GlobalStyles";
import Box from "./components/box/Box";
import Header from "./components/header/Header";
import Apresentation from "./components/apresentation/Apresentation";
import { Body } from "./theme/body.style";
import Logo from "./assets/Logo";
import Button from "./components/button/Button";
import BurguerIcon from "./assets/BurguerIcon";

function App() {
  const optionsHeaderBeforeDivisor = [
    {
      text: "Como funciona",
      color: theme.colors.textButton,
      textColorMenuMobile: theme.colors.titleH1,
      fontSize: 20,
      fontWeight: 600,
    },
    {
      text: "Planos",
      color: theme.colors.textButton,
      textColorMenuMobile: theme.colors.titleH1,
      fontSize: 20,
      fontWeight: 600,
    },
  ];

  const optionsAfterDivisor = [
    {
      text: "Login",
      color: theme.colors.textButton,
      textColorMenuMobile: theme.colors.titleH1,
      fontSize: 20,
      fontWeight: 600,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box
        marginX="auto"
        maxWidth={1438}
        backgroundColor="white"
        position="relative"
        overflow="hidden"
      >
        <Body>
          <Header
            mediaMaxWidth={932}
            mediaMinWidth={932}
            beforeDivider={optionsHeaderBeforeDivisor}
            afterDivider={optionsAfterDivisor}
            logo={<Logo />}
            divider={{ color: "black", height: 45, width: 2 }}
            boxOptions={{ width: 600 }}
            buttonOptions={{
              text: "Assinar",
              borderRadius: 50,
              background: theme.colors.bkgButton,
              height: 50,
              width: 135,
              colorText: theme.colors.textButton,
              fontWeight: 600,
              fontSize: 20,
            }}
            burguerIcon={<BurguerIcon />}
            px={58}
            py={51}
          />
          <Apresentation />
        </Body>
      </Box>
      {/*     <Box
        maxWidth={1438}
        backgroundColor="white"
        marginX="auto"
        height={800}
      ></Box> */}
    </ThemeProvider>
  );
}

export default App;
