import React from 'react'
import "./globalStyles.scss"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/inicio/Inicio'
import Doacao from './pages/doacao/Doacao'
import Voluntariado from './pages/voluntariado/Voluntariado'
import Mentoria from './pages/mentoria/Mentoria'
import EventosEP from './pages/eventosEP/EventosEP'
import Usuario from './pages/usuarios/Usuario'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/doacao' element={<Doacao/>}/>
        <Route path='/voluntariado' element={<Voluntariado/>}/>
        <Route path='/mentoria' element={<Mentoria/>}/>
        <Route path='/eventos' element={<EventosEP/>}/>
        <Route path='/usuario' element={<Usuario/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
