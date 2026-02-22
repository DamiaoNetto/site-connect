import React from "react";
import InfoCard from "../../components/infoCards/InfoCards";
import imgMentoria from "../../assets/images/mentoria-carreira-emprego.png";
import imgExperiencia from "../../assets/images/compartilhe-experiencia.png";
import imgAcompanhamento from "../../assets/images/acompanhamento.png";

import s from "../Style.module.scss";

export default function Mentoria() {
  return (
    <main className={s.main}>
      <h1>Mentoria</h1>
      <section>
        <article>
          <InfoCard
            img={imgMentoria}
            alt="Imagem de uma pessoa carregando caixa com alimentos"
            subtitulo="Mentoria de Carreira e Emprego"
            paragrafo="Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
            textoBotao="Quero participar"
          />
        </article>

        <article>
          <InfoCard
            img={imgExperiencia}
            alt="Imagem de uma "
            subtitulo="Compartilhe Experiência"
            paragrafo="Oriente jovens e profissionais iniciantes em sua área."
            textoBotao="Quero participar"
          />
        </article>

        <article>
          <InfoCard
            img={imgAcompanhamento}
            alt="Imagem de uma "
            subtitulo="Acompanhamento"
            paragrafo="Participe como guia em jornadas de aprendizado e desenvolvimento."
            textoBotao="Quero participar"
          />
        </article>
      </section>
    </main>
  );
}
