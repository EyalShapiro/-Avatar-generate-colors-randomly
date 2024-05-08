import { useState } from "react";

export const ColorPicker = () => {
	const [color, setColor] = useState<string>("red");

	console.log("colorPicker", color);

	return (
		<div style={{ background: color, display: "flex", width: "100%", height: "100%", justifyContent: "center" }}>
			<span
				style={{
					width: "max-content",
					height: "max-content",
					backgroundColor: "white",
					margin: "1rem",
					outline: "groove 0.7rem black",
					padding: "1rem",
					display: "flex",
					flexDirection: "column",
					justifyItems: "center",
					alignItems: "center",
				}}
			>
				<h2 style={{ marginRight: "5rem" }}>{color}</h2>
				<input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
			</span>
		</div>
	);
};
