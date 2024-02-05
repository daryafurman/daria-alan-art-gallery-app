export default function ArtPiecePreview({ name, artist, imageSource }) {
  return (
    <>
      <h1>{name}</h1>
      <img src={imageSource} alt={name} width={200} height={200} />
      <p>Artist: {artist}</p>
    </>
  );
}
