export default function ArtPiecePreview({ title, artist, image }) {
  return (
    <>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <p>Artist: {artist}</p>
    </>
  );
}
