import React from 'react';
import {render} from 'react-dom';
import Media from '../src/playlist/components/Media.jsx';
import css from "../style.scss"

export default class extends React.Component{

render(){
    return(
        
        <Media type="video" title="¿Qué es responsive Design?" author="Leonidas Esteban" image="https://cdne.ojo.pe/thumbs/uploads/img/2018/05/16/imagen-de-mario-sin-bigote-deja-en-shock-a-muchos--256300-jpg_700x0.jpg"/>
    )
}
}