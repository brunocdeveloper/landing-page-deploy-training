import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>testando testando testando</div>
    </ThemeProvider>
  );
}

export default App;
