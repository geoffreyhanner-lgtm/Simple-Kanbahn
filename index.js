const buttonsEl = document.querySelectorAll("button")

const inputFieldEl = document.getElementById("result")

let shouldClearScreen = false;

for (let i = 0; i < buttonsEl.length; i++){
	buttonsEl[i].addEventListener("click", () => {
		const buttonValue = buttonsEl[i].textContent;
		if (buttonValue === "C") {
			clearResult()
		} else if (buttonValue === "="){
			calculateResult() 
		} else {
			appendValue(buttonValue);
		}
	})
}

function clearResult() {
	inputFieldEl.value = ""
	shouldClearScreen = false;
}

function calculateResult() {
	inputFieldEl.value = eval(inputFieldEl.value)
	shouldClearScreen = true; 
}

function appendValue(buttonValue) {
	const operators = ['+', '-', '*', '/'];

  if (shouldClearScreen) {
    if (operators.includes(buttonValue)) {
      shouldClearScreen = false;
    } else {
      
      inputFieldEl.value = "";
      shouldClearScreen = false;
    }
  
  }
	inputFieldEl.value += buttonValue;
}