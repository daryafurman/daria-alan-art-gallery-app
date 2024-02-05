export default function ArtPiecePreview({ title, artist, image }) {
  return (
    <>
      <h1>{title}</h1>
      <img src={image} alt={title} width={500} height={300} />
      <p>Artist: {artist}</p>
    </>
  );
}
