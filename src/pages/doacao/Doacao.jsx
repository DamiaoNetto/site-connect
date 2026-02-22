import React from "react";
import InfoCard from "../../components/infoCards/InfoCards";
import igFamilia from "../../assets/images/instituto-grande-familia.png";
import pfEscola from "../../assets/images/pfEscola.png";
import conecta from "../../assets/images/jovem-conecta.png";

import s from "../Style.module.scss";

export default function Doacao() {
  return (
    <main className={s.main}>
      <h1>Doaçao</h1>
      <section>
        <article>
          <InfoCard
            img={igFamilia}
            alt="Imagem de uma pessoa carregando caixa com alimentos"
            subtitulo="Instituto grande familia"
            paragrafo="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
            textoBotao="Quero Doar"
          />
        </article>

        <article>
          <InfoCard
            img={pfEscola}
            alt="Imagem de uma "
            subtitulo="Projeto Futuro na Escola"
            paragrafo="Doe livros, cadernos, lapis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutra"
            textoBotao="Quero Doar"
          />
        </article>

        <article>
          <InfoCard
            img={conecta}
            alt="Imagem de uma "
            subtitulo="Projeto Futuro na Escola"
            paragrafo="Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades."
            textoBotao="Quero Doar"
          />
        </article>
      </section>
    </main>
  );
}
