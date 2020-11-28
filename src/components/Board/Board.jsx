import React, { useRef, useState } from "react";

import { produce } from "immer";
import Cell from "../Cell/Cell";
import Choices from "../Choices/Choices";
import "./board.css";
import generateBoard from "../../utils/generateBoard";

function Board({ board, setBoard }) {
	const activeCell = useRef(null);

	const setActiveCell = (e) => {
		if (activeCell.current) {
			const choice = e.currentTarget.innerText;
			const { row, col } = activeCell.current;
			// * Change cell value
			setBoard((board) =>
				produce(board, (updatedBoard) => {
					let canPlace = true;
					// * Check row
					for (let i = 0; i < 9; ++i) {
						if (updatedBoard.rows[row].cols[i].val == choice) {
							// updatedBoard.rows[row].cols[i].error = true;
							canPlace = false;
							break;
						}
					}
					// * Check col
					for (let i = 0; i < 9; ++i) {
						if (updatedBoard.rows[i].cols[col].val == choice) {
							// updatedBoard.rows[i].cols[col].error = true;
							canPlace = false;
							break;
						}
					}

					// * Check 3*3 matrix
					let startrow = Math.floor(row / 3) * 3,
						startcol = Math.floor(col / 3) * 3;

					for (let ii = startrow; ii < startrow + 3; ii++) {
						for (let jj = startcol; jj < startcol + 3; jj++) {
							if (updatedBoard.rows[ii].cols[jj].val === choice) {
								canPlace = false;
								break;
							}
						}
					}
					if (canPlace) {
						updatedBoard.rows[row].cols[col].val = choice;
						updatedBoard.error = "";
						updatedBoard.filledCnt++;
					} else {
						updatedBoard.error = "Bad Move " + (row + 1) + "," + (col + 1);
						updatedBoard.wrongMovesCnt++;
					}
				})
			);
		}
	};
	const resetGame = () => {
		activeCell.current = null;
		setBoard(generateBoard());
	};
	return (
		<div>
			<div className="board">
				{/* <pre>{JSON.stringify(board, null, 0)}</pre> */}

				<div className="stats-bar">
					<button onClick={resetGame}>Reset</button>
					<div>
						<span>Filled Cells : </span>
						<span className="fcVal">{board.filledCnt}</span>
						<span>/81</span>
					</div>
					<div>
						<span>Wrong Moves : </span>
						<span className="wmVal">{board.wrongMovesCnt}</span>
					</div>
				</div>
				{board.filledCnt === 81 && "WON!!"}
				<div className="grid">
					{board.rows.map((row) => {
						return (
							<div className="row" key={row.index}>
								{row.cols.map((cell) => (
									<Cell cell={cell} activeCell={activeCell} />
								))}
							</div>
						);
					})}
				</div>
			</div>
			<Choices setActiveCell={setActiveCell} />
		</div>
	);
}

export default Board;
