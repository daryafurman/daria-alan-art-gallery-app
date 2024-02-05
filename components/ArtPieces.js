import ArtPiecePreview from "./ArtPiecePreview";

// component should render a list of ArtPiecePreview
export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces?.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            title={piece.name}
            artist={piece.artist}
            image={piece.imageSource}
          />
        </li>
      ))}
    </ul>
  );
}
