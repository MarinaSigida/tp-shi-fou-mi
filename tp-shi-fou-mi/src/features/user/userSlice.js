import { createSlice } from "@reduxjs/toolkit";
import users from "./users";

const initialState = {
    userList: users,// Initialise la liste des utilisateurs avec les données importées
    selectedUser: null,
}
// Crée un slice Redux pour gérer les utilisateurs
export const userSlice = createSlice({
    name : users,
    initialState,
    reducers: { 
        selectUser: (state, action) => {
            state.selectedUser = action.payload;
        },
        addUser: (state, action) => {
            state.userList.push(action.payload);
        }

    }
})

export const {addUser} = userSlice.actions;