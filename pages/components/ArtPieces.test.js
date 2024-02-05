import { render, screen } from "@testing-library/react";
import ArtPieces from "./ArtPieces";

test("renders an unordered list of art pieces", () => {
  render(<ArtPieces />);
  const unorderedList = screen.getByRole("list");
  expect(unorderedList).toBeInTheDocument();
});
