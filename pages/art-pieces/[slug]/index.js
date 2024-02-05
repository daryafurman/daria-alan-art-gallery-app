import { useRouter } from "next/router"; // accessing the query parameters in the component
import { useEffect, useState } from "react";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage() {
  const [selectedArtPiece, setSelectedArtPiece] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    // Ensure slug is defined before trying to find the art piece
    if (slug) {
      setSelectedArtPiece(pieces.find((piece) => piece.slug === slug));

      // If the piece is found, set it as selected
      if (foundPiece) {
        setSelectedArtPiece(foundPiece);
      } else {
        // If the piece couldn't be found, redirect to 404
        router.push("/404");
      }
    }
  }, [setSelectedArtPiece, pieces, slug, router]);

  // redirect to 404, in case the piece couldn't be found within 5 seconds
  useEffect(() => {
    let timeoutId;
    if (!selectedArtPiece) {
      timeoutId = setTimeout(() => router.push("/404"), 5000);
    }

    return () => clearTimeout(timeoutId);
  }, [selectedArtPiece, router]);

  if (!selectedArtPiece) {
    return null;
  }

  return (
    <ArtPieceDetails
      image={selectedArtPiece.imageSource}
      title={selectedArtPiece.title}
      artist={selectedArtPiece.artist}
      year={selectedArtPiece.year}
      genre={selectedArtPiece.genre}
    />
  );
}
