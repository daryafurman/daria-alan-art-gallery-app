import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
`;

export const StyledHeader = styled.h1`
  text-align: center;
  font-size: xxx-large;
`;

// component should render a list of ArtPiecePreview
export default function ArtPieces({ pieces }) {
  return (
    <>
      <StyledHeader>ART GALLERY</StyledHeader>

      <List>
        {pieces?.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
              piece={piece.slug}
              title={piece.name}
              artist={piece.artist}
              image={piece.imageSource}
            />
          </li>
        ))}
      </List>
    </>
  );
}
