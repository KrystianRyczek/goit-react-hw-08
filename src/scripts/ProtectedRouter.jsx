import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogin } from '../redux/api/apiSlice';;

export default function PrivateRoute({ Component, redirectPath }) {
  const isLogin = useSelector(selectIsLogin);
  return isLogin ? Component : <Navigate to={redirectPath} replace />;
}