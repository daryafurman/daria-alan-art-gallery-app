import useSWR from "swr";
import ArtPieces from "./components/ArtPieces.js";

export const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const useArtPieces = () => {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  return {
    artPieces: data,
    isLoading: !error && !data,
    isError: error,
  };
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

  return (
    <div>
      <h1>Art Gallery</h1>
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
