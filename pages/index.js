import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";
import { useArtPieces } from "./_app";
const getRandomArtPiece = (artPieces) => {
  const randomIndex = Math.floor(Math.random() * artPieces.length);
  return artPieces[randomIndex];
};

// fetch ArtPieces and display it:

const Home = () => {
  const { artPieces, isLoading, isError } = useArtPieces();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  const spotlightPiece = getRandomArtPiece(artPieces);

  return (
    <div>
      <h1>Art Gallery App</h1>
      <Spotlight
        image={spotlightPiece.imageSource}
        artist={spotlightPiece.artist}
        title={spotlightPiece.name}
      />

      <ArtPieces pieces={artPieces} />
    </div>
  );
};

export default Home;

// export default function HomePage() {
//   return (
//     <div>
//       <h1>Hello from Next.js</h1>
//     </div>
//   );
// }
