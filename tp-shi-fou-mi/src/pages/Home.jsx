import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../features/user/userSlice';
import './Home.css';

const Home = () => {
  const [ name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [score, setScore] = useState(0);

const dispatch = useDispatch();
const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, email, score }));
    setName('');
    setEmail('');
    setScore(0);
   navigate('/game')
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>
          Bienvenue dans le jeu <span>Shi-fou-mi</span>! Inscrivez-vous
          ci-dessous pour commencer à jouer.
        </h2>
        <div>
          <label>Votre nom et prénom:</label>
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
          <button type="submit">Commencer le jeu</button>
        </div>
      </form>
      <h2>Regles du jeu:</h2>
      <h3>
        La pierre 👊 gagne contre les ciseaux ✌️ ; le papier 🤚 gagne contre la
        pierre 👊; et les ciseaux ✌️ gagnent contre le papier 🤚. Si les deux
        joueurs lancent la même main signal, il y a égalité et le jeu reprend
        jusqu'à ce qu'il y ait un gagnant.
      </h3>
    </div>
  );
};

export default Home;
