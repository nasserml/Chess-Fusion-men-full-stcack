import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './screens/Landing'
import Game from './screens/Game'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/game' element={<Game />} />
      <Route />
    </Routes>
     {/* <button className='bg-blue-500/40'>Join Game</button> */}
     </BrowserRouter>
    </>
  )
}

export default App
