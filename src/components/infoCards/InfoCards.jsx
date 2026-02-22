import React from 'react'
import s from './InfoCards.module.scss'
import Swal from 'sweetalert2'

export default function InfoCard(props) {
  const mostrarAlert = () =>{

  }

  return (

    <article className={s.article}>
        <img src={props.img} alt={props.alt} />
        <h2>{props.subtitulo}</h2>
        <p>{props.paragrafo}</p>
        <p>{props.segParagrafo}</p>
        <button onClick={mostrarAlert}>{props.textoBotao}</button>
    </article>
    )
}
