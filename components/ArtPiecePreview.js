import styled from "styled-components";
import Image from "next/image";

const ArtContainer = styled.div`
  padding: 20px;
  width: auto;
  max-width: 400px;
  margin: 40px auto;
  background: #ffffff08;
  border-radius: 16px;
  box-shadow: 0 4px 30px #0000001a;
  backdrop-filter: blur(16.4px);
  -webkit-backdrop-filter: blur(16.4px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default function ArtPiecePreview({ title, artist, image }) {
  return (
    <ArtContainer>
      <h3>{title}</h3>
      <Image className="box" src={image} alt={title} width={500} height={300} />
      <p>Artist: {artist}</p>
    </ArtContainer>
  );
}
