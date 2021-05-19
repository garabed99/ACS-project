
import React, {useState} from 'react';
import axios from 'axios';
import './style.css'
export default function Cell(props){
  
  
function cellBox(input){

    if(input.isMine){
      return "💣";
    }
    if(input.isFlagged){
      return "🏁";
  }
     return input.neighbour

}

let className = props.input.isRevealed ? "square" : "hidden"

  return(
    <div  className = "square" onClick= {props.onClick} onContextMenu = {props.cMenu}>
      {cellBox(props.input)}
    </div>
  )

}