import React from "react";
import CardVideo from "./components/CardVideo";
import "./styles.css";
import Usuario from "./midia/usuario.png"

export default function App() {

  const video1 = {
    img: "https://picsum.photos/400/400?a=1",
    titulo: "Título do vídeo",
    usuario: {
      img: Usuario,
      nome: "Nome de Usuário1",
    }
  }

  const video8 = {
    img: "https://picsum.photos/400/400?a=8",
    titulo: "Título do vídeo",
    usuario: {
      img: Usuario,
      nome: "Nome de Usuário8",
    }
  }

  const video7 = {
    img: "https://picsum.photos/400/400?a=7",
    titulo: "Título do vídeo",
    usuario: {
      img: Usuario,
      nome: "Nome de Usuário7",
    }
  }

  const video6 = {
    img: "https://picsum.photos/400/400?a=6",
    titulo: "Título do vídeo",
    usuario: {
      img: Usuario,
      nome: "Nome de Usuário6",
    }
  }

  const video5 = {
    img: "https://picsum.photos/400/400?a=5",
    titulo: "Título do vídeo",
    usuario: {
      img: Usuario,
      nome: "Nome de Usuário5",
    }
  }

  const video4 = {
    img: "https://picsum.photos/400/400?a=4",
    titulo: "Título do vídeo",
    usuario: {
      img: Usuario,
      nome: "Nome de Usuário4",
    }
  }

  const video3 = {
    img: "https://picsum.photos/400/400?a=3",
    titulo: "Título do vídeo",
    usuario: {
      img: Usuario,
      nome: "Nome de Usuário3",
    }
  }

  const video2 = {
    img: "https://picsum.photos/400/400?a=2",
    titulo: "Título do vídeo",
    usuario: {
      img: Usuario,
      nome: "Nome de Usuário2",
    }
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo
              video={video1}
            />
            <CardVideo 
            video = {video2}
            />
            <CardVideo 
            video = {video3}
            />
            <CardVideo 
            video = {video4}
            />
            <CardVideo 
            video = {video5}
            />
            <CardVideo 
            video = {video6}
            />
            <CardVideo 
            video = {video7}
            />
            <CardVideo 
            video = {video8}
            />
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
