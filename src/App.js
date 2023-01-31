import React from "react";
import CardVideo from "./components/CardVideo/CardVideo";
import "./styles.css";
import Usuario from "./midia/usuario.png"
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import { HeaderEstilo, MainEstilo, MenuLateral, TelaInteira, PainelVideos, FooterEstilo } from "./style";

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
    <>
      <GlobalStyle/>
      <TelaInteira>
        <HeaderEstilo>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </HeaderEstilo>

        <MainEstilo>
          <MenuLateral>
            <ul>
              <li>Início</li>
              <li>Em alta</li>
              <li>Inscrições</li>
              <hr />
              <li>Originais</li>
              <li>Histórico</li>
            </ul>
          </MenuLateral>

          <PainelVideos>
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
          </PainelVideos>
        </MainEstilo>

        <FooterEstilo>
          <h4>Oi! Eu moro no footer!</h4>
        </FooterEstilo>
      </TelaInteira>
    </>
  );
}
