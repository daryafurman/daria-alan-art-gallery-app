import Link from "next/link";
import Image from "next/image";

export default function ArtPiecePreview({ title, artist, image, piece }) {
  return (
    <div>
      <h1>{title}</h1>
      <Link href={`/art-pieces/${encodeURIComponent(piece)}`}>
        <Image src={image} alt={title} width={300} height={300} />
      </Link>
      <p>Artist: {artist}</p>
    </div>
  );
}
