import React, { useEffect, useState } from "react";
import { colorType, getColorFormAvatar } from "./getColorFormAvatar";
import { IUserType } from "./type";

const initials = (firstName: string, lastName: string) =>
	lastName && firstName && (firstName[0] + lastName[0]).toUpperCase();

export const Avatar: React.FC<Props> = ({ user: { firstName, lastName } }) => {
	const [colorAvatar, setColorAvatar] = useState<colorType>({
		colorText: `black`,
		backgroundColor: "white",
	});

	useEffect(() => {
		setColorAvatar(getColorFormAvatar().colorByUser({ firstName, lastName }));
	}, [firstName, lastName]);

	return (
		<div
			style={{
				margin: "1rem",
				alignItems: "center",
				justifyContent: "center",
				padding: "0.5em",
				outline: "inset 0.5rem",
				height: "max-content",
				width: "max-content",

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
					height: "max-content",
				}}
			>
				{initials(firstName, lastName)}
			</div>
			<b
				style={{
					color: "lavender",
					backgroundColor: "black",
					padding: "2px",
					margin: "1em",
				}}
			>
				{colorAvatar.backgroundColor}
			</b>
		</div>
	);
};

interface Props {
	user: IUserType;
}
