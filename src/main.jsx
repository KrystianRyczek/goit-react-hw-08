import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import './css/phoneBook.css'
import './css/searchForm.css'
import './css/addContact.css'
import './css/home.css'
import './css/navigation.css'
import './css/signIn.css'
import './css/signUp.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>,
  </Provider>

)
