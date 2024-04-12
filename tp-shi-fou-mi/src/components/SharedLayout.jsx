import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './SharedLayout.css';

const SharedLayout = () => {
  return (
    <div className="container">
      <nav>
        <NavLink to="/" end className="navLink">
          Home
        </NavLink>
        <NavLink to="/game" className="navLink">
          Game
        </NavLink>
        <NavLink to="/results" className="navLink">
          Results
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
