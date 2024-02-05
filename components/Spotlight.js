import Image from "next/image";

export default function Spotlight({ image, artist, title }) {
  return (
    <div>
      <h2>Spotlight Piece</h2>
      <Image src={image} width={500} height={300} alt={title} />
      <p>Artist: {artist}</p>
    </div>
  );
}

{
  /* <img src={image} />
<h2>Artist: {artist}</h2> */
}
