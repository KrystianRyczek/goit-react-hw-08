import { useDispatch } from "react-redux"
import { addUserContact } from "../redux/api/operation"
import { useSelector } from 'react-redux';
import { selectToken } from '../redux/api/apiSlice';
import * as Yup from 'yup';

export const useAddUserForm=()=>{

    const dispach = useDispatch()
    
    const token = useSelector(selectToken)

    const addNewContact=(newContact)=>{
      dispach(addUserContact({token, newContact}))
    }

    const Shema = Yup.object().shape({
        name: Yup.string()
                 .min(2,"Name is too short")
                 .max(20,"Name is too long")
                 .required('Name is required'),
        number:  Yup.number()
                    .typeError("That doesn't look like a phone number")
                    .positive("A phone number can't start with a minus")
                    .integer("A phone number can't include a decimal point")
                    .min(10000000)
                    .required('A phone number is required')
      })
         
    return {Shema, addNewContact}
}