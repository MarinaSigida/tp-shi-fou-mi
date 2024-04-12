import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './SharedLayout.css';

const SharedLayout = () => {
  return (
    <div className="container">
      <nav>
        <NavLink to="/" end className="navLink">
          Accueil
        </NavLink>
        <NavLink to="/game" className="navLink">
          Jeu
        </NavLink>
        <NavLink to="/results" className="navLink">
          Résultats
        </NavLink>
      </nav>
      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default SharedLayout;
