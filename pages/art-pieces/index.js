import ArtPieces from "@/components/ArtPieces";
import { useArtPieces } from "../_app";
import styled from "styled-components";

const ImagesContainer = styled.div`
display: flex;
width: 100%;
padding: 4% 2%;
box-sizing: border-box;
height: 100vh;
}

.box {
flex: 1;
overflow: hidden;
transition: .5s;
margin: 0 2%;
box-shadow: 0 20px 30px rgba(0,0,0,.1);
line-height: 0;
}
`;

export default function ArtPiecesPage() {
  const { artPieces, isLoading, isError } = useArtPieces();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }
  return (
    <ImagesContainer>
      <ArtPieces pieces={artPieces} />
    </ImagesContainer>
  );
}
