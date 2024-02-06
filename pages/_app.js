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

  return {
    artPieces: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const ArtProvider = ({ children }) => {
  const artState = useArtPieces();

  return <ArtContext.Provider value={artState}>{children}</ArtContext.Provider>;
};

export default function App({ Component, pageProps }) {
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
    <>
      <GlobalStyle />
      <ArtProvider>
        <Layout>
          <Component
            {...pageProps}
            artPiecesInfo={artPiecesInfo}
            onToggleFavorite={handleToggleFavorite}
          />
        </Layout>
      </ArtProvider>
    </>
  );
}
