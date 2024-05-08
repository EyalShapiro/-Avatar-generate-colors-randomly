import { Avatar } from "./components/Avatar";
import "./App.css";
import { DataUsersList } from "./components/data/DataUsersList";
import { ColorPicker } from "./components/ColorPicker";
import { IUserType } from "./components/Avatar/type";

function App() {
	return (
		<div className="App">
			<h1> Avatar-generate-colors-randomly</h1>
			<ColorPicker />
			<div
				style={{
					margin: "2rem",
					display: "flex",
					width: "100%",
					height: "100%",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div style={{ display: "flex", flexWrap: "wrap", flexFlow: "wrap", alignItems: "center" }}>
					{DataUsersList.map((user: IUserType, i: string | number) => (
						<Avatar key={i} user={user} />
					))}
				</div>
			</div>
		</div>
	);
}
export default App;
