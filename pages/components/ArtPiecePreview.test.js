import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";

test("renders an unordered list of art pieces", () => {
  render(<ArtPiecePreview />);
  const heading = screen.getByRole("heading");
  const image = screen.getByRole("img");
  const paragraph = screen.getByText("Artist:");
  expect(heading).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
});
