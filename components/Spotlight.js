import Image from "next/image";
import styled from "styled-components";
import { StyledImage } from "./ArtPieceDetails";
import FavoriteButton from "./FavoriteButton";
import Link from "next/link";

const SpotlightArt = styled.div`
  background: #ffffff08;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SpotlightImageContainer = styled.div``;

export default function Spotlight({
  image,
  artist,
  title,
  onToggleFavorite,
  isFavorite,
  piece,
}) {
  return (
    <>
      <SpotlightArt>
        <h2>SPOTLIGHT</h2>
        <Link href={`/art-pieces/${encodeURIComponent(piece)}`}>
          <StyledImage src={image} width={500} height={600} alt={title} />
        </Link>
        <p>Artist: {artist}</p>
        {/* <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={() => onToggleFavorite(piece)}
        /> */}
      </SpotlightArt>
    </>
  );
}
{
  /* <img src={image} />
<h2>Artist: {artist}</h2> */
}
