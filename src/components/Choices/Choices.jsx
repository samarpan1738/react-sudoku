import React from "react";
import "./choices.css";

function Choices({ setActiveCell }) {
	return (
		<div className="choices">
			<div className="choice" onClick={setActiveCell}>
				1
			</div>
			<div className="choice" onClick={setActiveCell}>
				2
			</div>
			<div className="choice" onClick={setActiveCell}>
				3
			</div>
			<div className="choice" onClick={setActiveCell}>
				4
			</div>
			<div className="choice" onClick={setActiveCell}>
				5
			</div>
			<div className="choice" onClick={setActiveCell}>
				6
			</div>
			<div className="choice" onClick={setActiveCell}>
				7
			</div>
			<div className="choice" onClick={setActiveCell}>
				8
			</div>
			<div className="choice" onClick={setActiveCell}>
				9
			</div>
		</div>
	);
}

export default Choices;
