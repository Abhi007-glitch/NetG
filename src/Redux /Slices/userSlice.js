import { createSlice } from "@reduxjs/toolkit";

const userSliceConfig = {
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
          return action.payload;
        },
        removeUser:(state,action)=>{
          return null;
        }
    }
}

const userSlice = createSlice(userSliceConfig);

export const {addUser,removeUser}= userSlice.actions;

export default userSlice.reducer;