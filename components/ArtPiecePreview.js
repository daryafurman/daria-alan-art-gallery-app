import React from "react";
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
  padding: 20px;
  margin: 40px;
  background: #ffffff08;
  border-radius: 100px;
  box-shadow: 0 4px 30px #0000001a;
  backdrop-filter: blur(16.4px);
  -webkit-backdrop-filter: blur(16.4px);
`;

const ArtPiecePreview = ({
  title,
  artist,
  image,
  slug,
  onToggleFavorite,
  isFavorited,
}) => {
  const toggleFavorite = () => {
    onToggleFavorite(slug);
  };
  return (
    <ArtContainer>
      <h3>{title}</h3>
      <ArtImageContainer>
        <FavoriteButton
          isFavorited={isFavorited}
          onToggleFavorite={toggleFavorite}
          positionAbsolute={true}
          slug={slug}
        />
        <Link href={`/art-pieces/${encodeURIComponent(slug)}`}>
          {image ? (
            <Image src={image} alt={title} width={500} height={300} />
          ) : (
            <div>No image available</div>
          )}
        </Link>
      </ArtImageContainer>
      <p>Artist: {artist}</p>
    </ArtContainer>
  );
};

export default ArtPiecePreview;
