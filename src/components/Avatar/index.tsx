import { useEffect, useState } from "react";
import { colorType, getColorFormAvatar } from "./getColorFormAvatar";
import { IUserType } from "./type";

const initials = (firstName: string, lastName: string) => (firstName[0] + lastName[0]).toUpperCase();

export const Avatar: React.FC<IProps> = ({ user: { firstName, lastName } }) => {
	const [colorAvatar, setColorAvatar] = useState<colorType>({
		colorText: `black`,
		backgroundColor: "white",
	});
	const { colorByUser } = getColorFormAvatar();
	useEffect(() => {
		setColorAvatar(colorByUser({ firstName, lastName }));
	}, [colorByUser, firstName, lastName]);

	return (
		<div
			style={{
				margin: "1rem",
				display: "inline-block",
				outline: "inset 0.5rem",
				outlineColor: colorAvatar.backgroundColor ? colorAvatar.backgroundColor : "black",
			}}
		>
			<div
				className="Avatar"
				style={{
					color: colorAvatar.colorText ? colorAvatar.colorText : "black",
					backgroundColor: colorAvatar.backgroundColor ? colorAvatar.backgroundColor : "white",
					justifyContent: "center",
					margin: "2rem",
					padding: "2px",
					alignItems: "center",
					// width: "max-content",
					height: "max-content",
				}}
			>
				{initials(firstName, lastName)}
			</div>
			<b style={{ color: "lavender", backgroundColor: "black", padding: "1px" }}>{colorAvatar.backgroundColor}</b>
		</div>
	);
};

interface IProps {
	user: IUserType;
}
