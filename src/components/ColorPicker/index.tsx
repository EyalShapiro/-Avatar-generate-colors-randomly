import { useState } from "react";

export const ColorPicker = () => {
	const [color, setColor] = useState<string>("red");
	console.log(color);

	return (
		<div
			style={{
				background: color,
				display: "flex",
				width: "100%",
				height: "100%",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-around",
			}}
		>
			<h3
				style={{
					margin: "1rem",
					width: "max-content",
					height: "max-content",
					textAlign: "center",
					padding: "1rem",
					outline: "groove 0.7rem black",
					color: "white", // changing text color to white
					boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)", // adding box-shadow to text
				}}
			>
				Color Picker
			</h3>
			<span
				style={{
					width: "max-content",
					height: "max-content",
					background: "white",
					margin: "1rem",
					outline: "groove 0.7rem black",
					padding: "1rem",
					display: "flex",
					zIndex: 100,
					flexDirection: "column",
					justifyItems: "center",
					alignItems: "center",
					boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)", // adding box-shadow
				}}
			>
				<h2 style={{ marginRight: "5rem" }}>{color}</h2>
				<input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
			</span>
			<h3
				style={{
					margin: "1rem",
					width: "max-content",
					height: "max-content",
					textAlign: "center",
					padding: "1rem",
					outline: "groove 0.7rem black",
					color: "white", // changing text color to white
				}}
			>
				בחירת צבע
			</h3>
		</div>
	);
};
