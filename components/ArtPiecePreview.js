import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

const ArtImageContainer = styled.div``;

const ArtContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  padding: 30px;
  margin: 40px;
  border-radius: 80px;
  box-shadow: 0 4px 30px #0000001a;
`;

export default function ArtPiecePreview({ title, artist, image, piece }) {
  return (
    <ArtContainer>
      <h3>{title}</h3>
      <Link href={`/art-pieces/${encodeURIComponent(piece)}`}>
        <Image
          className="box"
          src={image}
          alt={title}
          width={500}
          height={400}
        />
      </Link>
      <p>Artist: {artist}</p>
    </ArtContainer>
  );
}
