import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

const ArtImageContainer = styled.div``;

const ArtContainer = styled.div`
  padding: 20px;
  width: auto;
  max-width: 400px;
  margin: 40px auto;
  background: #ffffff08;
  border-radius: 16px;
  box-shadow: 0 4px 30px #0000001a;
  backdrop-filter: blur(16.4px);
  -webkit-backdrop-filter: blur(16.4px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default function ArtPiecePreview({
  title,
  artist,
  image,
  onToggleFavorite,
  isFavorite,
  piece,
}) {
  return (
    <ArtContainer>
      <h3>{title}</h3>
      <ArtImageContainer>
     <Link href={`/art-pieces/${encodeURIComponent(piece)}`}>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          positionAbsolute={true}
        ></FavoriteButton>
        <Image src={image} width={500} height={300} alt={title} />
        </Link>
      </ArtImageContainer>

      <p>Artist: {artist}</p>
    </ArtContainer>
  );
}
