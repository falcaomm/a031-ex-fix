import React from "react";
import InfosUsuario from "./InfosUsuario";


export default function CardVideo(props) {
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }

    return (
        <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src={props.video.img} />
            <h4>{props.video.titulo}</h4>
            <InfosUsuario 
            usuario = {props.video.usuario}
            />
        </div>
    )
}