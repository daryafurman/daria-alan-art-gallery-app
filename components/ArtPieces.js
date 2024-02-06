import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
`;

const StyledHeader = styled.h1`
  text-align: center;
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
              slug={piece.slug}
              title={piece.name}
              artist={piece.artist}
              isFavorited={piece.isFavorite}
              image={piece.imageSource}
            />
          </li>
        ))}
      </List>
    </>
  );
}
