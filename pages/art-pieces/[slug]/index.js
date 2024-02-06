import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage({}) {
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug: ", slug);

  return (
    <>
      <ArtPieceDetails
        title="Orange Red and Green Abstract Painting"
        image="https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
        artist="Steve Johnson"
        year={2018}
        genre="Abstract Painting"
      />
    </>
  );
}

{
  /* <ArtPieceDetails
        title={slug.name}
        image={slug.imageSource}
        artist={slug.artist}
        year={slug.year}
        genre={slug.genre}
      /> */
}
