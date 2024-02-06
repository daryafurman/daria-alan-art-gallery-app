import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";

const SpotlightArt = styled.div`
  padding: 20px;
  margin: 40px auto;
  background: #ffffff08;
  border-radius: 100px;
  box-shadow: 0 4px 30px #0000001a;
  backdrop-filter: blur(16.4px);
  -webkit-backdrop-filter: blur(16.4px);
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
  slug,
}) {
  return (
    <>
      <SpotlightArt>
        <SpotlightImageContainer>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
            positionAbsolute={true}
            slug={slug}
          ></FavoriteButton>
          <Image src={image} width={500} height={300} alt={title} />
        </SpotlightImageContainer>
        <p>Artist: {artist}</p>
      </SpotlightArt>
    </>
  );
}
{
  /* <img src={image} />
<h2>Artist: {artist}</h2> */
}
