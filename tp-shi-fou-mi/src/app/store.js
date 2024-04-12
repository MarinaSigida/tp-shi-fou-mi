import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../features/game/gameSlice';
import { userSlice } from '../features/userSlice'

export default configureStore({
  reducer: {
    game: gameReducer,
    u: userSlice.reducer,
  },

});

export const { selectUser } = userSlice.actions