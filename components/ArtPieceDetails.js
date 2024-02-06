import Image from "next/image";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <h1>{title}</h1>

      <Image
        className="art-piece-detail-image"
        src={image}
        alt={title}
        width={500}
        height={400}
      />
      <h3>Artist: {artist}</h3>
      <h3>Year: {year}</h3>
      <h3>Genre: {genre}</h3>
    </>
  );
}
