import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";
import { useArtPieces } from "./_app";

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
      <h1>
        ART GALLERY{" "}
        <style jsx>{`
          h1 {
            text-align: center;
          }
        `}</style>
      </h1>
      <Spotlight
        image={spotlightPiece.imageSource}
        artist={spotlightPiece.artist}
        title={spotlightPiece.name}
      />
    </>
  );
};

export default SpotlightPage;

// export default function HomePage() {
//   return (
//     <div>
//       <h1>Hello from Next.js</h1>
//     </div>
//   );
// }
