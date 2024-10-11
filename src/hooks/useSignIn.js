import * as Yup from 'yup';
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { signInUser } from "../redux/api/operation"
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../redux/api/apiSlice';

export const useSignIn=()=>{
  const dispach = useDispatch()

  const navigate = useNavigate()

  const isLogin = useSelector(selectIsLogin)
  useEffect(() => {
    if(isLogin){
      navigate("/Contacts", {replace: true})
    }
  }, [isLogin]);

    const signIn=(user)=>{
      dispach(signInUser(user))
    }
    const Shema = Yup.object().shape({
      email: Yup.string()
                 .min(2,"Name is too short")
                 .max(20,"Name is too long")
                 .required('Login is required'),
                 password:  Yup.string()
                 .min(2,"Name is too short")
                 .required('Password is required'),
      })
         
    return {Shema, signIn}
}