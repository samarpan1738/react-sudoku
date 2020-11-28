import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import generateBoard from "./utils/generateBoard";

function App() {
	const [board, setBoard] = useState(generateBoard);
	return (
		<div className="App">
			<p className="heading">Sudoku</p>
			<Board board={board} setBoard={setBoard} />
		</div>
	);
}

export default App;
