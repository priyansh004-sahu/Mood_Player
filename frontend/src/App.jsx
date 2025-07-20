import FacialExpression from "./components/FacialExpression"
import './App.css'
import MoodSong from './components/MoodSongs';
import { useState } from 'react'

function App() {

  const [Songs, setSongs] = useState([
       
   ]);

  return (
    <>
      <FacialExpression setSongs={setSongs} />
      <MoodSong songs={Songs} />
    </>
  )
}

export default App
