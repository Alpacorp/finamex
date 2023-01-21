const sumRadioValues = () => {
  const radios: NodeListOf<HTMLInputElement> = document.querySelectorAll(
    "input[type='radio']"
  );
  let total: number = 0;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      total += parseInt(radios[i].value);
    }
  }
  return { total };
};

export default sumRadioValues;
