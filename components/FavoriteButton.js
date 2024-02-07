import Image from "next/image.js";
import styled from "styled-components";
import { useContext } from "react";
import { ArtContext } from "../pages/_app";
import { useState } from "react";

const Button = styled.button`
  position: ${({ $positionAbsolute }) =>
    $positionAbsolute ? "absolute" : "static"};
  right: 1rem;
  top: 2rem;
  z-index: 1;
  border: 1px solid #ccc; // Adjust the border color and width

  border-radius: 50%;
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  padding: 0.2rem 0 0;
  border: none;
  outline: none;
`;

export default function FavoriteButton({
  isFavorite,
  slug,
  positionAbsolute = false,
}) {
  const { handleToggleFavorite } = useContext(ArtContext);
  const [isButtonActive, setIsButtonActive] = useState(isFavorite);

  const toggleFavorite = () => {
    setIsButtonActive(!isButtonActive);
    handleToggleFavorite(slug);
  };

  return (
    <Button
      type="button"
      onClick={toggleFavorite}
      isFavorite={isFavorite}
      aria-label={isFavorite ? "unlike" : "like"}
      $positionAbsolute={positionAbsolute}
      slug={slug}
    >
      {isButtonActive ? (
        <Image
          src="/assets/filled-heart.svg"
          alt="Like"
          width={40}
          height={40}
        />
      ) : (
        <Image src="/assets/heart.svg" width={40} height={40} alt="unLike" />
      )}
    </Button>
  );
}
