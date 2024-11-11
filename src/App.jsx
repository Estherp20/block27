import { useState } from 'react'
import SignUpForm from './components/signUpForm'
import Authenticate from './components/Authenticate'
import './App.css';

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Authenticate token={token} setToken={setToken} />
      <SignUpForm token={token} setToken={setToken} />
         
    </>
  );
}

// export default App
