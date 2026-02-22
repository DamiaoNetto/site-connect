import React from 'react'
import s from "./usuario.module.scss"
import { FaLocationDot, 
  FaEnvelope, 
  FaCalendarDays, } from "react-icons/fa6";

export default function Usuario() {
  return (
    <main className={s.main}>
        
        <section>
          <img src="https://avatars.githubusercontent.com/u/143633691?v=4" alt="Imagem do usuário"   />
          <div className={s.div}>
            <h1>Damiao Netto</h1>
            <h2>Voluntário Ativo</h2>
            <p>   Desenvolvedor em formação e entusiasta de tecnologia, atuando
    em projetos sociais com foco em impacto comunitário, inovação
    digital e transformação social.</p>
            <ul>
  <li><FaLocationDot /> Natal - RN</li>
  <li><FaEnvelope /> netto@gmail.com</li>
  <li><FaCalendarDays /> Membro desde 2022</li>
            </ul>
            <ul>
              <li>Educação</li>
              <li>Meio Ambiente</li>
              <li>Assistência Social</li>
              <li>Design</li>
            </ul>
         
          </div>
        </section>

    </main>
  )
}
