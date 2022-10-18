import React from "react";

export default function InfosUsuario(props) {
    return (
        <div className="usuario">
            <img className="fotoUsuario" src={props.usuario.img} />
            <span>{props.usuario.nome}</span>
        </div>
    )
}