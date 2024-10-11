import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { lazy, Suspense, useEffect } from "react";
import { useSelector } from 'react-redux';
import { selectIsLogin, selectToken, selectUserAdded, selectCoctactDeleted, selectCoctactAdded, selectFilter} from '../redux/api/apiSlice';
import { getUserContacts } from "../redux/api/operation"
import { useDispatch } from "react-redux"
import PrivateRoute from '../scripts/ProtectedRouter';

const Navigation = lazy(() => import('./Navigation'));
const Home = lazy(() => import('./Home'));
const SignUp = lazy(() => import('./SignUp'));
const SignIn = lazy(() => import('./SignIn'));
const Contacts = lazy(() => import('./Contacts'));
const ErrorMessage = lazy(() => import('./ErrorMessage'));

function App() {
  const dispach = useDispatch()

  const isLogin = useSelector(selectIsLogin)
  const userAdded = useSelector(selectUserAdded)
  const contactDeleted = useSelector(selectCoctactDeleted)
  const contactAdded = useSelector(selectCoctactAdded)
  const filter = useSelector(selectFilter)


  const token = useSelector(selectToken)

    useEffect(() => {
      if(isLogin){
        dispach(getUserContacts(token))
      }
    }, [isLogin, userAdded, contactDeleted, contactAdded, filter]);


  return (
    <>
    <BrowserRouter>
      <Navigation/>
      <Suspense fallback={<div>Loading page...</div>}>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/contacts" element={            
                                        <PrivateRoute
                                          redirectPath="/"
                                          Component={<Contacts/>}
                                        />
                                        }/>
        <Route path="*" element={<ErrorMessage/>}/>    
      </Routes>
      
      </Suspense>
    </BrowserRouter>
      
    </>
  )
}

export default App



