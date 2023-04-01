import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyle } from "./theme/GlobalStyles";
import Box from "./components/box/Box";
import Header from "./screen/Header";
import Apresentation from "./screen/Apresentation";
import { Body } from "./theme/body.style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box marginX="auto" width={1438} backgroundColor="white">
        <Body>
          <Header />
          <Apresentation />
        </Body>
      </Box>
      <Box
        maxWidth={1438}
        backgroundColor="white"
        marginX="auto"
        height={800}
      ></Box>
    </ThemeProvider>
  );
}

export default App;
