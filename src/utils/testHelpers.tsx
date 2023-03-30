import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";

const renderWithTheme = (children: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

export default renderWithTheme;
