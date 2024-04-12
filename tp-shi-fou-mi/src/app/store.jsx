import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../features/game/gameSlice';
import { userSlice } from '../features/user/userSlice'

const store = configureStore({
  reducer: {
    game: gameReducer,
    u: userSlice.reducer,
  },

});

export const { selectUser } = userSlice.actions
export default store