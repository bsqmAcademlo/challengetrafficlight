import React, { useEffect, useState } from "react";

export const App = () => {
	const [color, setColor] = useState();
	const [flag, setFlag] = useState(false);
	const [time, setTime] = useState(1000);

	useEffect(() => {
		setColor("red");

		const set1 = setTimeout(() => {
			setColor("yellow");
		}, time * 1);

		const set2 = setTimeout(() => {
			setColor("green");
		}, time * 2);

		const set3 = setTimeout(() => {
			setFlag(!flag);
		}, time * 3);

		return () => {
			clearTimeout(set1);
			clearTimeout(set2);
			clearTimeout(set3);
		};
	}, [flag, time]);

	return (
		<>
			<div className="semaforo">
				<div className={`item ${color === "red" ? "rojo" : ""}`}></div>
				<div
					className={`item ${color === "yellow" ? "amarillo" : ""}`}
				></div>
				<div
					className={`item ${color === "green" ? "verde" : ""}`}
				></div>
			</div>
			<select
				onChange={(e) => {
					setTime(+e.target.value);
				}}
				className="select"
			>
				<option value="1000">1s</option>
				<option value="2000">2s</option>
				<option value="3000">3s</option>
				<option value="4000">4s</option>
			</select>
		</>
	);
};
