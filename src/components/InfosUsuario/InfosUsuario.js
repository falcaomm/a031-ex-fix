import React from "react";
import { UsuarioEstido, ImgUsuario } from "./style";

export default function InfosUsuario(props) {
    return (
        <UsuarioEstido className="usuario">
            <ImgUsuario src={props.usuario.img} />
            <span>{props.usuario.nome}</span>
        </UsuarioEstido>
    )
}