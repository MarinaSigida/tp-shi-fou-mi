import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playerChoice: null,
  computerChoice: null,
  result: null,
  roundsPlayed: 0,
  playerScore: 0,
  computerScore: 0,
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
    roundsPlayed(state) {
      state.roundsPlayed++;
    },
    scoreUpdate(state) {
      if (state.result === 'playerWin') { 
        state.playerScore++;
      } else if (state.result === 'computerWin') { 
        state.computerScore++;
      }
    },
    resetGame(state) {
      state.playerChoice = null;
      state.computerChoice = null;
      state.result = null;
    },
  },
});

export const {
  setPlayerChoice,
  setComputerChoice,
  setResult,
  roundsPlayed,
  scoreUpdate,
  resetGame,
} = gameSlice.actions;

export default gameSlice.reducer;

