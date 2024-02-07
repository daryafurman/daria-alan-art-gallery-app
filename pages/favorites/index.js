import ArtPieces from "@/components/ArtPieces";
import { useContext } from "react";
import { ArtContext } from "../_app";

export default function FavoritesPage() {
  const { artPiecesInfo, handleToggleFavorite } = useContext(ArtContext);

  // Filter artPiecesInfo to get only favorite art pieces
  const favoriteArtPieces = artPiecesInfo.filter(
    (artPiece) => artPiece.isFavorite
  );

  return (
    <div>
      <h1>Favorites:</h1>
      <ArtPieces
        pieces={favoriteArtPieces}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}
