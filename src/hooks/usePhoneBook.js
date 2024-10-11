import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectContacts, selectFilter, selectToken } from '../redux/api/apiSlice';
import { deleteUserContact } from "../redux/api/operation";
import { createSelector } from "@reduxjs/toolkit";

export const usePhoneBook=()=>{
    const dispatch = useDispatch()

    const token = useSelector(selectToken)

    const remove = (userId) =>{
      dispatch(deleteUserContact({token, userId}))   
    }

    const selectItemsByFilter = createSelector(
      [selectContacts, selectFilter],(friends, filter) => {
        const searchingActive = filter ? true : false

        if(filter==""){
          return [friends, searchingActive]
        }

        const filtredContacts = friends.filter((friend) => 
          friend.name.toLowerCase().includes(filter.toLowerCase()))
            return [filtredContacts, searchingActive]

      })

    const[friends, searchingActive] = useSelector(selectItemsByFilter)


    return{remove, friends, searchingActive}
}