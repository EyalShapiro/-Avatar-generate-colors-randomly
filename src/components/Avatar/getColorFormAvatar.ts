import { IUserType } from './type';

export function getColorFormAvatar() {
  const getFirstLetterUnicode = (name: string): number => {

    return name ? name.charCodeAt(0) : 1;
  };

  const colorByUser = ({ firstName, lastName }: IUserType) => {
    const first: number = getFirstLetterUnicode(firstName);
    const last: number = getFirstLetterUnicode(lastName);

    if (isNaN(first) || isNaN(last)) {
      return {
        colorText: `black`,
        backgroundColor: 'white',
      };
    }
    else {
      const red = Math.round(((first * 2 + last * 3) % 256) / 5) * 5;
      const green = Math.round(((first * 3 + last * 2) % 256) / 5) * 5;
      const blue = Math.round((((first + last) * 2) % 256) / 5) * 5;

      // Calculate brightness
      const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

      // Adjust text color based on brightness
      return {
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        colorText: brightness > 200 ? 'black' : 'white',
      };
    }
  };

  return { colorByUser };
}

export type colorType = { colorText: string; backgroundColor: string };
