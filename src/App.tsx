import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import Box from "./components/box/Box";
import { GlobalStyle } from "./theme/GlobalStyles";
import Logo from "./assets/Logo";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Box marginX="auto" backgroundColor="white" width={1440}>
        <Logo />
      </Box>
    </ThemeProvider>
  );
}

export default App;
