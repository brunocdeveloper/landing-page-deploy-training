import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyle } from "./theme/GlobalStyles";
import Box from "./components/box/Box";
import Logo from "./assets/Logo";
import Text from "./components/text/Text";
import Button from "./components/button/Button";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box
        width={1438}
        display="flex"
        px={58}
        py={51}
        backgroundColor="transparent"
        marginX="auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width={700}
        >
          <Text
            hover
            text="Como funciona"
            color={theme.colors.textButton}
            fontSize={20}
            fontWeight={600}
          />
          <Text
            hover
            text="Preço"
            color={theme.colors.textButton}
            fontSize={20}
            fontWeight={600}
          />
          <Text
            hover
            text="Depoimentos"
            color={theme.colors.textButton}
            fontSize={20}
            fontWeight={600}
          />
          <Box backgroundColor="black" height={45} width={2} />
          <Text
            hover
            text="Login"
            color={theme.colors.textButton}
            fontSize={20}
            fontWeight={600}
          />
          <Button
            text="Comprar"
            backgroundColor={theme.colors.bkgButton}
            borderRadius={50}
            width={135}
            height={50}
            color={theme.colors.textButton}
            fontWeight={600}
            fontSize={20}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
