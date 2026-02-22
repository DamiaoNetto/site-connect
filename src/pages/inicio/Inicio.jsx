import React from 'react'
import s from './inicio.module.scss'
import banner from "../../assets/images/banner_inicio.png"

export default function Inicio() {
  return (
    <main className={s.main}>
      
      <section className={s.hero}>
        
        <div className={s.info}>
          <h1>
            Projetos Sociais <br /> que transformam
          </h1>

          <p>
            Conectamos sua empresa com projetos sociais impactantes.
            Juntos, criamos mudanças reais na comunidade.
          </p>

          <button>
            Cadastrar Empresa ➔
          </button>

          <div className={s.infoDados}>
            <article>
              <h2>500+</h2>
              <h3>Empresas Voluntárias</h3>
            </article>

            <article>
              <h2>1.2K+</h2>
              <h3>Projetos Realizados</h3>
            </article>

            <article>
              <h2>50K+</h2>
              <h3>Vidas Impactadas</h3>
            </article>
          </div>
        </div>

        <div className={s.imageContainer}>
          <img
            src={banner}
            alt="Imagem representando responsabilidade social"
          />
        </div>

      </section>

    </main>
  )
}