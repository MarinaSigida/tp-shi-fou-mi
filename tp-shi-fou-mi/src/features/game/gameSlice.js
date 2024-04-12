import { createSlice } from '@reduxjs/toolkit';
import Game from '../../pages/Game.jsx';

const initialState = {
  playerChoice: null,
  computerChoice: null,
  result: null,
  roundsPlayed: 0,
  playerScore: 0,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayerChoice(state, action) {
      state.playerChoice = action.payload;
    },
    setComputerChoice(state, action) {
      state.computerChoice = action.payload;
    },
    setResult(state, action) {
      state.result = action.payload;
    },
    incrementRoundsPlayed(state) {
      state.roundsPlayed++;
    },
    scoreUpdate(state) {
        if (state.result === 'playerWin') { 
          state.playerScore++;
        } else if (state.result === 'computerWin') { 
          if (state.playerScore === 0) {
          } else {
            state.playerScore--;
          }
        }
      },
    resetGame(state) {
        state.playerChoice = null;
        state.computerChoice = null;
        state.result = null;
        state.roundsPlayed = 0;
        state.playerScore = 0;
    },
  },
});

export const {
  setPlayerChoice,
  setComputerChoice,
  setResult,
  incrementRoundsPlayed,
  scoreUpdate,
  resetGame,
} = gameSlice.actions;

export default gameSlice.reducer;

