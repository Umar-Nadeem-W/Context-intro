import { createContext, useContext, useState } from 'react'
import './App.css'
import Checkout from './components/Checkout';
import Login from './components/Login';
export const userContext = createContext();
function App() {
  const [user, setUser] = useState("guest");

  return (
    <userContext.Provider value={{user , setUser}}>
      <Login />
      <Checkout/>
    </userContext.Provider>
  )
}

export default App
