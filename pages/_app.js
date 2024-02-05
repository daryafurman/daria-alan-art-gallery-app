import GlobalStyle from "../styles";
import useSWR from "swr";
import { createContext, useContext } from "react";
import Layout from "@/components/Layout";

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
  return (
    <>
      <GlobalStyle />
      <ArtProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ArtProvider>
    </>
  );
}
