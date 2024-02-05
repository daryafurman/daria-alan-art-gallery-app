import Link from "next/link";

import styled from "styled-components";

const List = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  height: 60px;
  margin: 0;
  align-items: center;
  font-size: 25px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0 0.3rem;
  color: ${({ $isActive }) => ($isActive ? "var(--primary-color)" : "black")};
  font-weight: bold;
  &:hover {
    border-bottom: 5px dotted var(--primary-color);
  }
`;

const Navigation = () => {
  return (
    <nav>
      <List role="list">
        <li>
          <NavLink href="/" passHref>
            Spotlight
          </NavLink>
        </li>
        <li>
          <NavLink href="/art-pieces" passHref>
            Art Pieces
          </NavLink>
        </li>
        <li>
          <NavLink href="/favorites" passHref>
            Favorites
          </NavLink>
        </li>
      </List>
    </nav>
  );
};

export default Navigation;
