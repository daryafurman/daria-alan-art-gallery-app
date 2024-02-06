import Image from "next/image.js";
import styled from "styled-components";
import { useContext } from "react";
import { ArtContext } from "../pages/_app";

const Button = styled.button`
  position: ${({ $positionAbsolute }) =>
    $positionAbsolute ? "absolute" : "static"};
  right: 1rem;
  top: 2rem;
  z-index: 1;
  background-color: ${({ isFavorite }) => (isFavorite ? "lightcoral" : "none")};
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

  const toggleFavorite = () => {
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
      <Image src="/assets/heart.svg" width={40} height={40} alt="" />
    </Button>
  );
}
