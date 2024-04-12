import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPlayerChoice,
  setComputerChoice,
  setResult,
  incrementRoundsPlayed,
  scoreUpdate,
  resetGame,
} from '../features/game/gameSlice';
import './Game.css';


const Game = () => {
  const dispatch = useDispatch();
  const [playerChoice, setPlayerChoice] = useState(null);
  const { computerChoice, result, roundsPlayed, playerScore, computerScore } = useSelector(state => state.game);

  const choices = ['pierre 👊', 'papier 🤚', 'ciseaux ✌️'];

  const playRound = () => {
    const computerChoice = choices[Math.floor(Math.random() * 3)]; // 3 = choices.length
    dispatch(setComputerChoice(computerChoice));

    let roundResult;
    if (playerChoice === computerChoice) {
      roundResult = 'égalité'
    } else if (
      (playerChoice === 'pierre 👊' && computerChoice === 'ciseaux ✌️') ||
      (playerChoice === 'papier 🤚' && computerChoice === 'pierre 👊') ||
      (playerChoice === 'ciseaux ✌️' && computerChoice === 'papier 🤚')
    ) {
      roundResult = 'playerWin';
    } else {
      roundResult = 'computerWin';
    }
    dispatch(setResult(roundResult));
    dispatch(incrementRoundsPlayed());
    dispatch(scoreUpdate());
  }

  const handleResetGame = () => {
    dispatch(resetGame());
    setPlayerChoice(null);
  };

  return (
    <div style={{ width: '1000px', margin: '20px auto'}}>
      <h2> Choisis ton signe:</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {choices.map(choice => (
          <button key={choice} onClick={() => setPlayerChoice(choice)}>{choice}</button>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
      <button onClick={playRound}>Jouer la partie</button>
      <button onClick={handleResetGame}>Réinitialiser le jeu</button>
      </div>
      {playerChoice && (
        <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', marginTop: '30px'}}>
          <p>Ton choix: {playerChoice}</p>
          <p>Choix de l'ordinateur: {computerChoice}</p>
          <p>Résultat: {result}</p>
          <p>Nombre de tours joués: {roundsPlayed}</p>
          <p>Ton score: {playerScore}</p>
        </div>
      )}
    </div>
  );
};

export default Game;
