import { act, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";

export const renderWithTheme = (children: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

export const ensureRender = async () => {
  await act(() => Promise.resolve());
};
