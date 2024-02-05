import Image from "next/image";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <h1>←</h1>
      <h2>{title}</h2>
      <Image src={image} alt={title} />
      <ul>
        {colors.map((color, index) => (
          <li key={index} color={color} aria-label={color} />
        ))}
      </ul>
      <ul>
        <li>{artist}</li>
        <li>{year}</li>
        <li>{genre}</li>
      </ul>
    </>
  );
}
