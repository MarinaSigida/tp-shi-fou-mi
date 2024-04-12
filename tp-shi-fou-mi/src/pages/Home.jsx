import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Home.css';

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    //dispatch(registerUser({ name, email }));
    // Optionally, you can redirect the user to the Game page after registration
    // history.push('/game');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>
          Bienvenue dans le jeu <span>Shi-fou-mi</span>! Inscrivez-vous
          ci-dessous pour commencer à jouer.
        </h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="btn-container">
          <button type="submit">Start the game</button>
        </div>
      </form>
      <h2>Game Rules:</h2>
      <h3>
        Le rocher 👊 gagne contre les ciseaux ✌️ ; le papier 🤚 gagne contre le
        rocher 👊; et les ciseaux ✌️ gagnent contre le papier 🤚. Si les deux
        joueurs lancent la même main signal, il y a égalité et le jeu reprend
        jusqu'à ce qu'il y ait un gagnant.
      </h3>
    </div>
  );
};

export default Home;
