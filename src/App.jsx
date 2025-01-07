import { useState } from 'react'
import AddRoom from './components/room/AddRoom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap"
import ExistingRoom from './components/room/ExistingRoom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/hoom/Home'
import EditRoom from './components/room/EditRoom';
import ExistingRooms from './components/room/ExistingRoom'
function App() {
  return (
    <>
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/edit-room/:roomId" element={<EditRoom />} />
          <Route path="/existing-rooms" element={<ExistingRooms />} />

        </Routes>
      </Router>
    </main>
      
    </>
  )
}

export default App
