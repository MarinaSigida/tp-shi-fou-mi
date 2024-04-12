import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Results from './pages/Results';
import User from './pages/User';
import SharedLayout from './components/SharedLayout';
import NotFound from './pages/NotFound';
import { Provider } from 'react-redux';
import store from './app/store';

import './App.css';

function App() {
  return (
    <>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="results" element={<Results />} />
          <Route path="user/:name" element={ <User />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Provider>
    </>
  );
}

export default App;
