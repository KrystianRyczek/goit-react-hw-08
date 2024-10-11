import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const addUser = createAsyncThunk(
    'addUser/fetchaAddUser', 
    async(newUser) => {
        const {name, email, password}= newUser
        const resp = await axios.post('https://connections-api.goit.global/users/signup',
            {
                "name": name,
                "email": email,
                "password": password,
            }
            // {
            //     "name": "olassssssssssf",
            //     "email": "olassssssssssf@mail.com",
            //     "password": "examplepwd12345"
            // }
        )
        return resp.data
})

export const signInUser = createAsyncThunk(
    'signIn/fetchSignIn', 
    async(user) => {
        const resp = await axios.post('https://connections-api.goit.global/users/login',
            user
            // {
            //     "email":"olassssssssf@mail.com",
            //     "password":"examplepwd12345"
            //     }
        )
        return resp.data
})

export const signOutUser = createAsyncThunk(
    'signOut/fetchSignOut', 
    async(token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.post('https://connections-api.goit.global/users/logout')
        return resp
})

export const getUserContacts = createAsyncThunk(
    'getUserContacts/fetchGetUserContacts', 
    async(token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.get('https://connections-api.goit.global/contacts')
        return resp.data
})

export const addUserContact = createAsyncThunk(
    'addUserContacts/fetchAddUserContacts', 
    async({token, newContact}) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.post('https://connections-api.goit.global/contacts', newContact)
        return resp.data
})

export const deleteUserContact = createAsyncThunk(
    'deleteUserContacts/fetchDeleteUserContacts', 
    async({token, userId}) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.delete(`https://connections-api.goit.global/contacts/${userId}`) 
        return resp.data
})