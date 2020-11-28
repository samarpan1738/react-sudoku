import React, { useEffect, useState } from "react";
import "./cell.css";

function Cell({ cell, activeCell }) {
	const { row, col, prefilled, val, error } = cell;
	const handleClick = (e) => {
		if (prefilled) {
			return;
		}
		const ct = e.currentTarget;
		ct.classList.add("active");
		// console.log(activeCell.current);
		if (
			activeCell.current &&
			(activeCell.current.ele || activeCell.current.ele == ct)
		) {
			activeCell.current.ele.classList.remove("active");
		}
		if (activeCell.current && activeCell.current.ele == ct)
			activeCell.current = null;
		else activeCell.current = { ele: ct, row, col };
	};
	return (
		<div
			key={row + "" + col}
			className={
				"cell " + (prefilled ? "prefilled " : " ") + (error ? " error " : " ")
			}
			onClick={handleClick}
		>
			{val}
		</div>
	);
}

export default Cell;
