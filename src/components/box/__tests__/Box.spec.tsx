import renderWithTheme from "../../../utils/testHelpers";
import Box from "../Box";
import { screen } from "@testing-library/react";
describe("Box component", () => {
  it("render box child", () => {
    renderWithTheme(<Box>Testando</Box>);

    expect(screen.getByText("Testando"));
  });
});
