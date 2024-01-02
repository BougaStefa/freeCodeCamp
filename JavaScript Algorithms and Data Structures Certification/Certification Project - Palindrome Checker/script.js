const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = () => {
  const text = textInput.value;
  if (text === "") {
    alert("Please input a value");
    return;
  }
  const cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if (cleanText.split("").reverse().join("") === cleanText) {
    result.innerHTML = `${text} is a palindrome!`;
  } else {
    result.innerHTML = `${text} is not a palindrome!`;
  }
};

checkBtn.addEventListener("click", checkPalindrome);
