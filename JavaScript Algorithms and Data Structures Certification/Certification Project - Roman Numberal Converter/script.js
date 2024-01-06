const userInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

function showRomanNumeral() {
  output.style.backgroundColor = "";
  const numberInput = parseInt(userInput.value);
  if (output.classList.contains("hidden")) {
    output.classList.remove("hidden");
  }
  if (numberInput <= 0) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
    output.style.backgroundColor = "orangered";
    return;
  }
  if (numberInput > 3999) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
    output.style.backgroundColor = "orangered";
    return;
  }
  if (!numberInput) {
    output.innerHTML = "Please enter a valid number";
    output.style.backgroundColor = "orangered";
    return;
  }
  let answer = "";
  const oneToNine = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const tenToNinety = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const hundredToNineHundred = [
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
  ];
  const thousand = "M";
  if (numberInput / 1000 >= 1) answer += thousand.repeat(numberInput / 1000);
  if (numberInput % 1000 >= 100)
    answer += hundredToNineHundred[Math.floor((numberInput % 1000) / 100) - 1];
  if ((numberInput % 1000) % 100 >= 10)
    answer += tenToNinety[Math.floor(((numberInput % 1000) % 100) / 10) - 1];
  if (((numberInput % 1000) % 100) % 10 >= 1)
    answer += oneToNine[Math.floor(((numberInput % 1000) % 100) % 10) - 1];
  output.style.backgroundColor = "green";
  output.innerHTML = `${answer}`;
}

convertButton.addEventListener("click", showRomanNumeral);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    showRomanNumeral();
  }
});
