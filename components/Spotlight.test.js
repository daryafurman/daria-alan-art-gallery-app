import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

test("renders a randomly picked art piece image with its artist name", () => {
  render(<Spotlight />);
  const image = screen.getByRole("img");
  const paragraph = screen.getByText("Artist:");
  expect(image).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
});
