import ArtPieces from "@/components/ArtPieces";
import { useContext } from "react";
import { ArtContext } from "../_app";

export default function FavoritesPage() {
  const { artPiecesInfo } = useContext(ArtContext);

  // Filter artPiecesInfo to get only favorite art pieces
  const favoriteArtPieces = artPiecesInfo.filter(
    (artPiece) => artPiece.isFavorite
  );

  return (
    <div>
      <ArtPieces pieces={favoriteArtPieces} />
    </div>
  );
}
