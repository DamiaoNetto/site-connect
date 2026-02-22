import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/icones/logo.png"
import s from "./header.module.scss"

export default function Header() {

  const [menuAberto, setMenuAberto] = useState(false)

  const [isMobile, setIsMobile] = useState(window.innerWidth <=768)

  useEffect(()=>{
    function menuMobile(){
    setIsMobile(window.innerWidth <= 768);
    if(window.innerWidth > 768) {
      setMenuAberto(false)
    }
  }
    window.addEventListener("resize",menuMobile)
    return () => window.removeEventListener("resize", menuMobile)
  },[])

  return (
    <>
    
    <header className={s.header}>
      <Link to={"/"}>
          <img className={s.imgLogo} src={logo} alt="Imagem de logo do projeto connect sendo representada por uma mão segurando um coração, simbolizando apoio" />       

      </Link>
      {!isMobile &&
       <nav className={s.nav}>
        <Link className={s.Link} to={"/doacao"}>Doação</Link>
        <Link className={s.Link}  to={"/voluntariado"}>Voluntariado</Link>
        <Link className={s.Link}  to={"/mentoria"}>Mentoria</Link>
        <Link className={s.Link}  to={"/eventos"}>Eventos</Link>
        </nav>
      }


      <img className={s.imgUSER} src="https://avatars.githubusercontent.com/u/143633691?v=4" alt="Imagem do usuário"  
      onClick={()=>setMenuAberto(!menuAberto)}/>
    </header>

      <nav className={menuAberto ? s.navUser : s.closedNavUser}>
        <Link to={"/usuario"}>Damiao Netto</Link>
        <Link>Meu Voluntariado</Link>
        <Link>Configurações</Link>
        { isMobile &&
         (<div>
          <Link to={"/doacao"}>Doação</Link>
          <Link to={"/voluntariado"}>Voluntariado</Link>
          <Link to={"/mentoria"}>Mentoria</Link>
          <Link to={"/eventos"}>Eventos</Link>
        </div>)
        }
        <Link>Sair</Link>
      </nav>
    </>


)
}
