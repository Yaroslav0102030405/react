import Container from '../Container/Container';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>AppBar</h1>
      </header>
      <Container>{children}</Container>
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
};

export default Layout;
