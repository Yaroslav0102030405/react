import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
import './index.css';
import App from './App.jsx';
import 'modern-normalize/modern-normalize.css';
import Home from './assets/pages/Home.jsx';
import About from './assets/pages/About.jsx';
import Books from './assets/pages/Books.jsx';
import Author from './assets/pages/Author.jsx';
// import BookId from './assets/pages/BookId.jsx';
import B from './assets/pages/B.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            App
          </NavLink>
        </li>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/books">Books</NavLink>
        </li>
        <li>
          <NavLink to="/author">Author</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="books/:authorId" element={<B />} />
        <Route path="books" element={<Books />} />
        <Route path="author" element={<Author />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
