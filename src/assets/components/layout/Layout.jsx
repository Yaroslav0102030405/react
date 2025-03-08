import Container from '../Container/Container';
import { NavLink } from 'react-router';
import routes from '../../routes';
import UserMenu from '../UserMenu/UserMenu';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>AppBar</h1>
        <ul>
          {/* <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              App
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to={routes.home}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Головна
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.about}>О нас</NavLink>
          </li>
          <li>
            <NavLink to={routes.books}>Книги</NavLink>
          </li>
          <li>
            <NavLink to={routes.authors}>Автори</NavLink>
          </li>
        </ul>
        <UserMenu />
      </header>
      <Container>{children}</Container>
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  );
};

export default Layout;
