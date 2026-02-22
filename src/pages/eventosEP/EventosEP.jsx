import React from "react";
import InfoCard from "../../components/infoCards/InfoCards";
import imgJovens from "../../assets/images/empoderando-jovens-futuro.png";
import carreira from "../../assets/images/carreira-primeiro-emprego.png";
import tecnologia from "../../assets/images/tecnologia-que-transforma.png";

import s from "../Style.module.scss";

export default function EventosEP() {
  return (
    <main className={s.main}>
      <h1>Eventos & Palestras</h1>
      <section>
        <article>
          <InfoCard
            img={imgJovens}
            alt="Imagem de uma pessoa carregando caixa com alimentos"
            subtitulo="Empoderando Jovens para o Futuro"
            paragrafo="Atividade: Palestra motivacional sobre liderança jovem e transformação social. Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades."
            textoBotao="Quero participar"
          />
        </article>

        <article>
          <InfoCard
            img={tecnologia}
            alt="Imagem de uma "
            subtitulo="Tecnologia que Transforma"
            paragrafo="Atividade: Workshop de introdução à programação e inovação digital.Impacto: Preparar jovens para o mercado de trabalho através da tecnologia."
            textoBotao="Quero participar"
          />
        </article>

        <article>
          <InfoCard
            img={carreira}
            alt="Imagem de uma "
            subtitulo="Carreira e Primeiro Emprego"
            paragrafo="Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado.Impacto: Ajudar jovens a conquistar oportunidades de trabalho."
            textoBotao="Quero participar"
          />
        </article>
      </section>
    </main>
  );
}
