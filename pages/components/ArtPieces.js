import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
        {pieces?.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview
              name={piece.name}
              artist={piece.artist}
              imageSource={piece.imageSource}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
