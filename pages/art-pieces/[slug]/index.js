import { useState } from "react";
import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage({ artPiecesInfo }) {
  const router = useRouter();
  const { slug } = router.query;

  // State hook for storing comments
  const [comments, setComments] = useState([]); // added a comments state using the useState hook and passed it as a prop to ArtPieceDetails
  // also passed function onSubmitComment that updates the comments state by appending a new comment.

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
        title={selectedArtPiece.name}
        image={selectedArtPiece.imageSource}
        artist={selectedArtPiece.artist}
        year={selectedArtPiece.year}
        genre={selectedArtPiece.genre}
        comments={comments}
        onSubmitComment={(newComment) => setComments([...comments, newComment])}
      />
    </>
  );
}
