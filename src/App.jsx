import { useState } from 'react'
import Navbar from './component/Navbar.jsx'
import Catalog from './component/Catalog.jsx'
import StreamingExperience from './component/StreamingExperience';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <h1 className="text-3xl font-bold underline">      Hello world!    </h1>
     <Navbar></Navbar> */}
     <div className="min-h-screen bg-slate-950 font-sans">
      <Navbar />
      <main>
        {/* Vous pourrez ajouter une bannière "Hero" ici plus tard */}
        <Catalog />
        <StreamingExperience />
      </main>
    </div>
    </>
  )
}

export default App
