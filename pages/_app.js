import GlobalStyle from "../styles";
import useSWR from "swr";
import { createContext, useContext } from "react";
import Layout from "@/components/Layout";
import { useImmerLocalStorageState } from "../public/lib/hook/useImmerLocalStorageState.js";

const ArtContext = createContext(); //creating a context to hold the global state

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

  console.log("Data:", data);

  return {
    artPieces: data,
    isLoading: !error && !data,
    isError: error,
  };
};

// ArtProvider component should include artPiecesInfo
export const ArtProvider = ({ children }) => {
  const { artPiecesInfo, ...artState } = useArtPieces(); // Destructure artState

  return (
    <ArtContext.Provider value={{ ...artState, artPiecesInfo }}>
      {children}
    </ArtContext.Provider>
  );
};

export default function App({ Component, pageProps }) {
  // New state for art pieces information
  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  function handleToggleFavorite(slug) {
    console.log("on function ", slug);

    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { ...pieceInfo, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  const { artPieces, isLoading, isError } = useArtPieces();

  if (isLoading) {
    // Handle loading state
    return <div>Loading...</div>;
  }

  if (isError) {
    // Handle error state
    return <div>Error fetching art pieces!</div>;
  }

  return (
    <>
      <GlobalStyle />
      <ArtProvider>
        <Layout>
          <Component
            {...pageProps}
            artPiecesInfo={artPieces}
            onToggleFavorite={handleToggleFavorite}
          />
        </Layout>
      </ArtProvider>
    </>
  );
}
