import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage({ artPiecesInfo }) {
  const router = useRouter();
  const { slug } = router.query;

  // Find the art piece based on the slug
  const selectedArtPiece = artPiecesInfo.find(
    (artPiece) => artPiece.slug === slug
  );

  if (!selectedArtPiece) {
    // Handle case where art piece is not found
    return <div>Art piece not found!</div>;
  }

  return (
    <>
      <ArtPieceDetails
        title={selectedArtPiece.title}
        image={selectedArtPiece.image}
        artist={selectedArtPiece.artist}
        slug={selectedArtPiece.slug}
        onToggleFavorite={selectedArtPiece.onToggleFavorite}
        isFavorited={selectedArtPiece.isFavorited}
      />
    </>
  );
}
