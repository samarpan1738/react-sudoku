import { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";
window.makepuzzle = makepuzzle;
window.solvepuzzle = solvepuzzle;
function generateBoard() {
	const puzzle = makepuzzle();
	const board = { rows: [], filledCnt: 0, wrongMovesCnt: 0 };
	board.solution = solvepuzzle(puzzle);
	for (let i = 0; i < 9; ++i) {
		const row = { cols: [], index: i };
		for (let j = 0; j < 9; ++j) {
			let val = puzzle[i * 9 + j];
			if (val !== null) val += 1;
			const col = {
				val,
				row: i,
				col: j,
				prefilled: val != null,
			};
			if (col.prefilled) board.filledCnt++;
			row.cols.push(col);
		}
		board.rows.push(row);
	}
	console.log(board);
	return board;
}
export default generateBoard;
