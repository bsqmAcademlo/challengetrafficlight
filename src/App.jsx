import React, { useEffect, useState } from "react";

export const App = () => {
	const [color, setColor] = useState();
	const [flag, setFlag] = useState(false);
	const [time, setTime] = useState(1000);
	const [clock, setClock] = useState(1);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setClock(clock + 1);

			if (clock === time / 1000) {
				setClock(1);
			}
		}, 1000);

		return () => clearTimeout(timeout);
	}, [clock, time]);

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
			<div className="trafficLight">
				<div className={`item ${color === "red" ? "item-red" : ""}`}>
					<p>{clock} s</p>
				</div>
				<div
					className={`item ${
						color === "yellow" ? "item-yellow" : ""
					}`}
				>
					<p>{clock} s</p>
				</div>
				<div
					className={`item ${color === "green" ? "item-green" : ""}`}
				>
					<p>{clock} s</p>
				</div>
			</div>
			<select
				onChange={(e) => {
					setTime(+e.target.value);
					setClock(1);
				}}
				className="select"
			>
				<option value="1000">1 segundo</option>
				<option value="2000">2 segundos</option>
				<option value="3000">3 segundos</option>
				<option value="4000">4 segundos</option>
			</select>
		</>
	);
};
