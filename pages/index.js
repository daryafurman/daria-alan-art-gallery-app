import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";
import { useArtPieces } from "./_app";
import { StyledHeader } from "@/components/ArtPieces";

const getRandomArtPiece = (artPieces) => {
  const randomIndex = Math.floor(Math.random() * artPieces.length);
  return artPieces[randomIndex];
};

const SpotlightPage = () => {
  const { artPieces, isLoading, isError } = useArtPieces();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  const spotlightPiece = getRandomArtPiece(artPieces);

  return (
    <>
      <StyledHeader>ART GALLERY</StyledHeader>
      <Spotlight
        image={spotlightPiece.imageSource}
        artist={spotlightPiece.artist}
        title={spotlightPiece.name}
        piece={spotlightPiece.slug}
      />
    </>
  );
};

export default SpotlightPage;
