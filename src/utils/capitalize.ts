const capitalize = (str: string) => {
  let newText: string[] = str.split(" ");
  for (let index = 0; index < newText.length; index++) {
    newText[index] =
      newText[index].charAt(0).toUpperCase() +
      newText[index].substring(1).toLowerCase();
  }
  let textData: string = newText.join(" ");
  return textData;
};

export default capitalize;
