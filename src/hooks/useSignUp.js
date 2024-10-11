import * as Yup from 'yup';
import { useDispatch } from "react-redux"
import { addUser } from "../redux/api/operation"

export const useSignUp=()=>{
  const dispach = useDispatch()

    const signUp=(values)=>{
      console.log(values)
      dispach(addUser(values))
    }
    const Shema = Yup.object().shape({
      name: Yup.string()
                 .min(2,"Password is too short")
                 .max(20,"Password is too long")
                 .required('Login is required'),
      email: Yup.string()
                 .email(),
      password:  Yup.string()
                 .min(2,"Password is too short")
                 .required('Password is required'),
      passwordConfirmation: Yup.string()
                 .oneOf([Yup.ref('password'), null], 'Passwords must match'),
      })
         
    return {Shema, signUp}
}