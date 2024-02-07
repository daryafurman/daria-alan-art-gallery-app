import { ArtPieces } from "@/components/ArtPieces";
import { useArtPieces } from "../_app";

export default function ArtPiecesPage() {
  const { artPieces, isLoading, isError } = useArtPieces();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }
  return (
    <>
      <ArtPieces pieces={artPieces} />
    </>
  );
}
