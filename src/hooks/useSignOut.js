import { useDispatch } from "react-redux"
import { signOutUser } from "../redux/api/operation"

export const useSignOut=()=>{
  const dispach = useDispatch()

    const signOut=(token)=>{
      dispach(signOutUser(token))
    }

    return { signOut }
}