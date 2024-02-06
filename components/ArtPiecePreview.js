import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const ArtContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  padding: 20px;
  margin: 40px;
  background: #ffffff08;
  border-radius: 100px;
  box-shadow: 0 4px 30px #0000001a;
  backdrop-filter: blur(16.4px);
  -webkit-backdrop-filter: blur(16.4px);
`;

export default function ArtPiecePreview({ title, artist, image, piece }) {
  return (
    <ArtContainer>
      <h3>{title}</h3>
      <Link href={`/art-pieces/${encodeURIComponent(piece)}`}>
        <Image
          className="box"
          src={image}
          alt={title}
          width={500}
          height={300}
        />
      </Link>
      <p>Artist: {artist}</p>
    </ArtContainer>
  );
}
