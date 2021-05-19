
import React, {useState} from 'react';
import Board from './board'
import "./style.css"

export default function Minesweeper(){
 
const [h,setHeight] = useState(9);

const [w,setWidth] = useState(9);

const [mNum,setMineNum] = useState(10);

	return(
		<div className="minesweeper">
			<Board height = {h} width={w} mineNum={mNum}/>
		</div>
	)
}