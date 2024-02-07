import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
`;

const StyledParagraph = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHeader = styled.h1`
  text-align: center;
  font-size: xxx-large;
`;

// component should render a list of ArtPiecePreview
export default function ArtPieces({ pieces, onToggleFavorite }) {
  return (
    <>
      <StyledHeader>ART GALLERY</StyledHeader>
      {pieces.length > 0 ? (
        <List>
          {pieces.map((piece) => (
            <li key={piece.slug}>
              <ArtPiecePreview
                piece={piece.slug}
                title={piece.name}
                artist={piece.artist}
                image={piece.imageSource}
                onToggleFavorite={onToggleFavorite}
              />
            </li>
          ))}
        </List>
      ) : (
        <StyledParagraph>
          <p>No favorite art pieces found.</p>
        </StyledParagraph>
      )}
    </>
  );
}
