
import React, {useState} from 'react';
import Cell from './cell';
import axios from 'axios';

import "./style.css"

export default function Board(props){


const [board,setBoard] = useState(createBoard(props.height,props.width))


function start(board) {
  let arr = fillBoard(board,props.height,props.width,props.mineNum)
  board =arr
}

function createBoard(height,width){
  let arr = []
  for(let i =0; i<height; i++){
    arr.push([]);
    for(let j =0 ; j<width; j++){
      arr[i][j] = {
        x: i,
        y:j,
        isMine: false,
        neighbour: 0,
        isRevealed:false,
        isEmpty:false,
        isFlagged:false
      }
    }
  }
  return arr
}


function fillBoard(arr,height,width,mineNum){
 let  i  = 0;
 let j = 0;
 let counter = 0;

 while(counter<mineNum){
  i = Math.floor(Math.random()*height)
  j = Math.floor(Math.random()*width)
  if(!(arr[i][j].isMine)){
    arr[i][j].isMine = true;
    counter++;
  }
 }


for(let row = 0; row<height; row++){
  for(let col = 0; col<width; col++){
    if((arr[row][col].isMine) !== true){
      let count = 0;
      let tempArr = checkNeighbours(arr[row][col].x,arr[row][col].y,arr)
      tempArr.map(value =>{
        if(value.isMine){
          count++;
        }
      })
      if(count === 0){
        arr[row][col].isEmpty = true;
      }
      arr[row][col].neighbour = count;

    }
  }
}
console.log(arr)
return arr
}

function checkNeighbours(x,y,arr){
  let temp1 = [];
  for(let i = -1; i<=1; i++){
    for(let j = -1; j<=1; j++){
      const temp2 = arr[x+i]?.[y+j]
      if(temp2) temp1.push(temp2)
    }
  }
  return temp1
}


function renderBoard(board){
  start(board)
    return board.map((boardRow)=>{
      return boardRow.map((boardCell)=>{
          return (
            <div key = {boardCell.x*boardRow.length + boardCell.y}>
              
              <Cell 
                  onClick={()=> handleOnClick(boardCell.x,boardCell.y)}
                  cMenu = {(e)=> handleOnContextMenu(e,boardCell.x,boardCell.y)}
                  input = {boardCell}
                  />
            </div>
          )
      })
    })
  }

  function revealNeighbours(x,y,board){
      let arr = checkNeighbours(x, y, board);
      arr.map(cell => {
        if (!cell.isFlagged && !cell.isRevealed && (cell.isEmpty || !cell.isMine)) {
          arr[cell.x][cell.y].isRevealed = true;
          if (cell.isEmpty) {
            revealNeighbours(cell.x, cell.y, arr);
          }
        }
      });
      return arr;
    
  }

  
  function handleOnClick(x,y){
    if(board[x][y].isRevealed || board[x][y].isFlagged){
      return null;
    }
    if(!board[x][y].isRevealed){
      board[x][y].isRevealed = true;
      console.log(`${board[x][y].x} + ${board[x][y].isRevealed }`)
    }
    if(board[x][y].isMine){
      alert("Lost")
    }
  }
function handleOnContextMenu(e,x,y){
  e.preventDefault();
  if(board[x][y].isFlagged){
    board[x][y].isFlagged = false;
  }else{
    board[x][y].isFlagged = true;
    console.log(`${board[x][y].x} + ${board[x][y].isFlagged}`)
  }
}

  return(
    <div className="board">
      <div className="container"> 
        <span> mines left: {props.mineNum} </span>
      </div>
      <div className="timer">
      <span> timer: </span>
      </div>

    { renderBoard(board)}
  </div>
  )
}