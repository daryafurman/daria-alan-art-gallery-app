import Image from "next/image";

export default function ArtPiecePreview({ title, artist, image }) {
  return (
    <>
      <h1>{title}</h1>
      <div>
        <Image src={image} alt={title} width={500} height={300} />
      </div>
      <p>Artist: {artist}</p>
    </>
  );
}
