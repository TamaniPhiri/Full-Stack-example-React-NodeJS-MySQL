import './App.css'
import axios from 'axios';
import { useEffect,useState } from 'react';

function App() {

  const [data,setData]=useState([]);

  useEffect(()=>{
    (async()=>{
      const users=await axios.get('http://localhost:8080/users');
      setData(users.data);
    })()
  },[]);

  return (
    <>
      <div>
        {data.map((results)=>(
          <div key={results.id}>
            <h1>{results.name}</h1>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
