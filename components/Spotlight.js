import Image from "next/image";
import styled from "styled-components";

const SpotlightArt = styled.div`
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

export default function Spotlight({ image, artist, title }) {
  return (
    <>
      <SpotlightArt>
        <Image src={image} width={500} height={300} alt={title} />
        <p>Artist: {artist}</p>
      </SpotlightArt>
    </>
  );
}
{
  /* <img src={image} />
<h2>Artist: {artist}</h2> */
}
