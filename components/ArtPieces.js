import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
`;

// component should render a list of ArtPiecePreview
export default function ArtPieces({ pieces }) {
  return (
    <>
      <h1>
        ART GALLERY{" "}
        <style jsx>{`
          h1 {
            text-align: center;
          }
        `}</style>
      </h1>
      <List>
        {pieces?.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
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
