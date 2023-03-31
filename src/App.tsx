import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyle } from "./theme/GlobalStyles";
import Box from "./components/box/Box";
import Header from "./screen/Header";
import Apresentation from "./screen/Apresentation";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box maxWidth={1438} backgroundColor="transparent" marginX="auto">
        <Header />
        <Apresentation />
      </Box>
    </ThemeProvider>
  );
}

export default App;
