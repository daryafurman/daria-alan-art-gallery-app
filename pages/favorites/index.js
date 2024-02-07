// pages/favorites.js
import ArtPieces from "@/components/ArtPieces";
import { useArtPieces } from "../_app";
import { StyledHeader } from "@/components/ArtPieces";

export default function FavoritesPage({ pieces }) {
  const { artPieces, isLoading } = useArtPieces();
  if (isLoading) {
    return null;
  }
  console.log("artPiecesInfo: ", artPieces);

  // Filter art pieces that are marked as favorites
  const favoriteArtPieces = artPieces.filter((piece) => piece.isFavorite);

  return (
    <>
      <ArtPieces pieces={favoriteArtPieces} />
    </>
  );
}
