import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import reactLogo from './assets/video.png'
import PeliculaProvider from './components/PeliculaProvider'
import Navbar from './components/Navbar'
import Catalog from "./components/Catalogo"
import InsertarPelicula from './components/InsertarPelicula'
import PeliculaCard from './components/PeliculaCard'
import PeliculaDetalle from './components/PeliculaDetalle'
import ModificarPelicula from './components/ModificarPelicula'
import Nosotros from './components/Nosotros'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <PeliculaProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/peliculas" element={<Catalog />} />
            <Route path="/pelicula/:id" element={<PeliculaDetalle />} />
            <Route path="/insertar" element={<InsertarPelicula />} />
            <Route path="/modificar/:id" element={<ModificarPelicula />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
          <ToastContainer />
        </PeliculaProvider>
      </BrowserRouter>
    </>
  )
}

export default App
