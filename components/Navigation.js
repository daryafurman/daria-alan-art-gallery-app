import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" passHref>
            Spotlight
          </Link>
        </li>
        <li>
          <Link href="/art-pieces" passHref>
            Art Pieces
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
