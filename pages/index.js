import React from 'react';
import {render} from 'react-dom';
import Playlist from '../src/playlist/components/Playlist';
import css from "../style.scss"
import data from '../src/api.json';


export default class extends React.Component{

render(){
    return(
        
<Playlist data={data} />    )
}
}