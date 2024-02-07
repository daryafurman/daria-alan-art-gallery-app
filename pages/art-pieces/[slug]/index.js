import { useEffect } from "react";
import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";
import useLocalStorageState from "use-local-storage-state";

export default function ArtPieceDetailsPage({
  artPiecesInfo,
  onToggleFavorite,
}) {
  const router = useRouter();
  const { slug } = router.query;

  // Use useLocalStorageState hook for comments
  const [comments, setComments] = useLocalStorageState(
    [],
    `artPieceComments-${slug}`
  ); // Store comments using slug in the key

  // Find the art piece based on the slug
  const selectedArtPiece = artPiecesInfo.find(
    (artPiece) => artPiece.slug === slug
  );

  useEffect(() => {
    // Load comments from local storage when the component mounts
    if (slug && typeof slug === "string") {
      const storedComments = localStorage.getItem(`artPieceComments-${slug}`);
      setComments(storedComments ? JSON.parse(storedComments) : []);
    }
  }, [slug]);

  useEffect(() => {
    // Sync local storage when comments change
    if (slug && typeof slug === "string") {
      setComments((prevComments) => {
        localStorage.setItem(
          `artPieceComments-${slug}`,
          JSON.stringify(prevComments)
        ); // Update local storage with the latest comments
        return prevComments;
      });
    }
  }, [comments, slug]);

  const handleCommentSubmit = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]); // Add a new comment to the component state
  };

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
        onSubmitComment={handleCommentSubmit}
        colors={selectedArtPiece.colors}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
