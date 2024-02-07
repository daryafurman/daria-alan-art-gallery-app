import { ArtPieces } from "@/components/ArtPieces";
import { useContext } from "react";
import { ArtContext } from "../_app";

export default function FavoritesPage() {
  const { artPiecesInfo, handleToggleFavorite } = useContext(ArtContext);

  const favoriteArtPieces = artPiecesInfo.filter(
    (artPiece) => artPiece.isFavorite
  );

  console.log(artPiecesInfo);

  const onToggleFavorite = (slug) => {
    handleToggleFavorite(slug);
  };

  console.log("fav", favoriteArtPieces);
  return (
    <div>
      {/* <ArtPieces
        pieces={favoriteArtPieces.map((piece) => ({
          title: piece.title,
          image: piece.imageSource,
          artist: piece.artist,
          isFavorite: piece.isFavorite,
          slug: piece.slug,
          onToggleFavorite: handleToggleFavorite,
        }))}
      /> */}
      <ArtPieces pieces={favoriteArtPieces} />
    </div>
  );
}
