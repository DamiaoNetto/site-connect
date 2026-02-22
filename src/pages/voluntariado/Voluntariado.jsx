import React from 'react'
import InfoCard from '../../components/infoCards/infoCard'
import reciclagem from '../../assets/images/mutirao-reciclagem.png'
import esporte from '../../assets/images/esporte-inclusao.png'
import aulaTec from '../../assets/images/aulas-tecnologia.png'


import s from "../Style.module.scss"


export default function Voluntariado() {
  return (
    <main className={s.main}>

        <h1>Voluntariado</h1>
      <section>
        <article>
          <InfoCard
          img = {reciclagem}
          alt = "Imagem de uma pessoa carregando caixa com alimentos"
          subtitulo = "Mutirão de reciclagem"
          paragrafo = "Coletar materiais recicláveis e orientar sobre descarte consciente." 
          textoBotao = "Quero participar"
          />
        </article>

        <article>
          <InfoCard
          img = {aulaTec}
          alt = "Imagem de uma "
          subtitulo = "Aulas de Tecnologia"
          paragrafo = "Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital." 
          textoBotao = "Quero participar"
          
          />
        </article>

        <article>
        <InfoCard
          img = {esporte}
          alt = "Imagem de uma "
          subtitulo = "Esporte e Inclusão"
          paragrafo = "Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens." 
          textoBotao = "Quero participar"/>
        </article>

      </section>
    </main>
  )
}
