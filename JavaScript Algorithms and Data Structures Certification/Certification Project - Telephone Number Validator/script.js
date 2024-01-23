const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const validRegex = /^1?\s?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

checkButton.addEventListener("click",()=>{
    if(userInput.value === ''){
        alert('Please provide a phone number');
        return;
    }
    results.textContent = validRegex.test(userInput.value) ? 'Valid US number: '+userInput.value : 'Invalid US Number: '+userInput.value;
});

clearButton.addEventListener("click",()=>{
    results.textContent = '';
})
