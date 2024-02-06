import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage({}) {
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug: ", slug);

  return (
    <>
      <ArtPieceDetails
        title={slug.name}
        image={slug.imageSource}
        artist={slug.artist}
        year={slug.year}
        genre={slug.genre}
      />
    </>
  );
}
