import { createSlice } from "@reduxjs/toolkit";
import users from "./users";

const initialState = {
    userList: users,
    selectedUser: null,
}

export const userSlice = createSlice({
    name : users,
    initialState,
    reducers: {
        selectUser(state, action) {
            state.selectedUser = action.payload;
        }
    }
})