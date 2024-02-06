import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <footer>
        <Navigation />
      </footer>
    </div>
  );
};

export default Layout;
