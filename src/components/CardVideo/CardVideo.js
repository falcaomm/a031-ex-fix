import React from "react";
import InfosUsuario from "../InfosUsuario/InfosUsuario";
import { BoxVideo, Imgvideo} from "./style";


export default function CardVideo(props) {
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }

    return (
        <BoxVideo onClick={reproduzVideo}>
        <Imgvideo src={props.video.img} />
            <h4>{props.video.titulo}</h4>
            <InfosUsuario 
            usuario = {props.video.usuario}
            />
        </BoxVideo>
    )
}