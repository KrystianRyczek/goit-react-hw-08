import { NavLink } from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectIsLogin, selectToken, selectUser } from '../redux/api/apiSlice';
import { useSignOut } from "../hooks/useSignOut";

export default function Navigation(){

    const { signOut } = useSignOut()

    const isLogin = useSelector(selectIsLogin)
    const user = useSelector(selectUser)
    const token = useSelector(selectToken)
 
    const setActive = ({isActive}) =>{
        return isActive ? "navlink active" : "navlink";
    }

if(!isLogin){
    return (<div className="navigation-box">
        <nav className="navigation">
                <NavLink
                    className={ setActive}
                    to="/"
                >
                Home
                </NavLink>
                <div className="nav-access">
                <NavLink
                    className={setActive}
                    to="/signup"
                >
                Sign Up
                </NavLink>
                <NavLink
                    className={setActive}
                    to="/signin"
                >
                Sign In
                </NavLink>
                </div>
            </nav>
    </div>)
}
return (<div className="navigation-box">
    <nav className="navigation">
        <div className="nav-user-singin">
            <NavLink
                className={setActive}
                to="/"
            >
            Home
            </NavLink>
            <NavLink
                className={setActive}
                to="/contacts"
            >
            Contacts
            </NavLink>
        </div>
        <div className="nav-user-singout">
            <div className="nav-user-greeting">Welcome, {user.name}!</div>
            <button
            className="nav-user-sign-out-btn"
                onClick={()=>{signOut(token)}}>
                SignOut
            </button> 
        </div> 
    </nav>
</div>)


}