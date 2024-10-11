import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addUser, signInUser, signOutUser, getUserContacts, addUserContact, deleteUserContact } from "./operation";

const initialState ={
      isLoading: false,
      isLogin: false,
      token: null,
      user: null,
      contacts: [],
      userAdded: null,
      coctactAdded: null,
      coctactDeleted: null,
      error: null,
      filter:""
  }

  const handlePending = (state) => {
    state.isLoading = true
    state.userAdded = null
    state.coctactAdded = false
    state.coctactDeleted = false

  };
  const handleRejected = (state, action) => {
    state.isLoading = false
    state.error= action.error.message;

  };

export const apiUsersData = createSlice({
    name: "apiToDo",
    initialState,
    reducers:{
        filtreatingContacts: (state, action)=>{
            state.filter = action.payload
        }},
    extraReducers: builder => {
        builder
            .addCase(addUser.fulfilled,  (state,action) => {
                state.isLoading = false
                state.isLogin=true
                state.token = action.payload.token
                state.user = action.payload.user
                state.userAdded = true
                state.error = null
            })
            .addCase(signInUser.fulfilled,  (state,action) => {
                state.isLoading = false
                state.isLogin=true
                state.token = action.payload.token
                state.user = action.payload.user
                state.userAdded = null
                state.error = null

            })
            .addCase(signOutUser.fulfilled, (state) => {
                state.isLoading = false,
                state.isLogin = false,
                state.token = null,
                state.user = null,
                state.contacts=[]
                state.userAdded = null,
                state.coctactAdded= null,
                state.coctactDeleted = null
                state.error = null
                state.filter=""
            })
            .addCase(getUserContacts.fulfilled, (state,action) => {
                state.isLoading = false,
                state.contacts = action.payload,
                state.error = null
            })
            .addCase(addUserContact.fulfilled, (state) => {
                state.isLoading = false,
                state.coctactAdded = true
                state.error = null
            })
            .addCase(deleteUserContact.fulfilled, (state) => {
                state.isLoading = false,
                state.coctactDeleted = true,
                state.error = null
            })
            .addMatcher(
                isAnyOf(
                    addUser.pending,
                    signInUser.pending,
                    signOutUser.pending,
                    getUserContacts.pending,
                    addUserContact.pending,
                    deleteUserContact.pending
                ),
                handlePending
            )
            .addMatcher(
                isAnyOf(
                    addUser.rejected,
                    signInUser.rejected,
                    signOutUser.rejected,
                    getUserContacts.rejected,
                    addUserContact.rejected,
                    deleteUserContact.rejected
                ),
                handleRejected
            )
    }
})


export const selectIsLoading = (state)=>state.data.isLoading 
export const selectIsLogin = (state)=>state.data.isLogin
export const selectToken =(state)=>state.data.token
export const selectUser = (state)=>state.data.user
export const selectContacts = (state)=>state.data.contacts
export const selectUserAdded = (state)=>state.data.userAdded
export const selectError = (state)=>state.data.error
export const selectFilter = (state)=>state.data.filter
export const selectCoctactDeleted = (state)=>state.data.coctactDeleted
export const selectCoctactAdded = (state)=>state.data.coctactAdded


export const { filtreatingContacts } = apiUsersData.actions

export default apiUsersData.reducer
