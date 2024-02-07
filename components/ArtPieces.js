import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
`;

const StyledHeader = styled.h1`
  text-align: center;
`;

// component should render a list of ArtPiecePreview
export function ArtPieces({ pieces, handleToggleFavorite, showFavorites }) {
  console.log("ArtPieces - pieces:", pieces);
  const filteredPieces = showFavorites
    ? pieces.filter((piece) => piece.isFavorite)
    : pieces;

  return (
    <>
      <StyledHeader>ART GALLERY</StyledHeader>

      <List>
        {filteredPieces?.map((piece) => (
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
