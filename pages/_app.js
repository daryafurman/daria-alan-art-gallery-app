import GlobalStyle from "../styles";
import useSWR from "swr";
import { createContext, useContext } from "react";
import Layout from "@/components/Layout";
import { useImmerLocalStorageState } from "../public/lib/hook/useImmerLocalStorageState.js";

export const ArtContext = createContext(); // Creating a context to hold the global state

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

export const ArtProvider = ({ children }) => {
  const artState = useArtPieces();
  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  return (
    <ArtContext.Provider
      value={{ artState, artPiecesInfo, handleToggleFavorite }}
    >
      {children}
    </ArtContext.Provider>
  );
};

export default function App({ Component, pageProps }) {
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
          <Component {...pageProps} artPieces={artPieces} />
        </Layout>
      </ArtProvider>
    </>
  );
}
