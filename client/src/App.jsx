import './App.css'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
 
  useEffect(()=>{
    (async()=>{
      const users = await axios.get('http://localhost:8080/users')
      console.log(users);
    })()
  },[])

  return (
    <>
      <div>full stack example</div>  
    </>
  )
}

export default App
