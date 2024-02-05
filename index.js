const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const userScoreValue = document.querySelector("#userScore");
const computerScoreValue = document.querySelector("#computerScore");
const gameScreen = document.querySelector(".game__view");
const resultScreen = document.querySelector(".result__viewMain");
const ruleButton = document.querySelector(".rule_btn");
const userSection = document.querySelector(".user__section");
const computerSection = document.querySelector(".computer__section");
const userSelected = document.querySelector(".user__choice");
const computerSelected = document.querySelector(".computer__choice");
const resultText = document.querySelectorAll(".result");
const rulesItem = document.querySelector(".rule__view");

console.log("log==>", resultText);

let userScore = localStorage.getItem("userScore") || 0;
let computerScore = localStorage.getItem("computerScore") || 0;
let userChoice;
let computerChoice;
window.onload = () => {
	userScoreValue.innerHTML = userScore;
	computerScoreValue.innerHTML = computerScore;
	resultScreen.style.display = "none";
};
const draw = (userChoice, computerChoice) => {
	gameScreen.style.display = "none";
	resultScreen.style.display = "flex";
	console.log("draw");
	// resultText.innerHTML = "Draw";
	resultText.forEach((element) => {
		// Change the innerHTML of each element
		element.innerHTML = "draw";
	});
	userSection.classList.add("option", `${userChoice}`);
	computerSection.classList.add("option", `${computerChoice}`);
	userSelected.src = `./assets/${userChoice}.svg`;
	computerSelected.src = `./assets/${computerChoice}.svg`;
};
const generateComputerChoice = () => {
	const choices = ["rock", "paper", "scissor"];
	const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
};

const handleButtonPress = () => {
	resultScreen.style.display = "none";
	gameScreen.style.display = "block";
	userSection.classList.remove(`${userChoice}`);
	computerSection.classList.remove(`${computerChoice}`);
};
const handleGameResult = (userChoice, computerChoice, winningPlayer) => {
	gameScreen.style.display = "none";
	resultScreen.style.display = "flex";
	userSection.classList.add("option", `${userChoice}`);
	computerSection.classList.add("option", `${computerChoice}`);
	userSelected.src = `./assets/${userChoice}.svg`;
	computerSelected.src = `./assets/${computerChoice}.svg`;
	if (winningPlayer == "computer") {
		computerScore++;
		localStorage.setItem("computerScore", `${computerScore}`);
		computerScoreValue.innerHTML = computerScore;
		// resultText.innerHTML = "You Lost";
		resultText.forEach((element) => {
			// Change the innerHTML of each element
			element.innerHTML = "You Lost";
		});
	} else {
		userScore++;
		localStorage.setItem("userScore", `${userScore}`);
		userScoreValue.innerHTML = userScore;
		// resultText.innerHTML = "You Won";
		resultText.forEach((element) => {
			// Change the innerHTML of each element
			element.innerHTML = "You Won";
		});
	}
	console.log(
		`user selected: ${userChoice} and computer selected: ${computerChoice}`
	);
};
const handlePlay = (choice) => {
	userChoice = choice.getAttribute("data-user-selected");
	computerChoice = generateComputerChoice();
	if (userChoice == "paper") {
		if (computerChoice == "scissor") {
			handleGameResult(userChoice, computerChoice, "computer");
		} else if (computerChoice == "rock") {
			handleGameResult(userChoice, computerChoice, "user");
		} else {
			draw(userChoice, computerChoice);
		}
	} else if (userChoice == "scissor") {
		if (computerChoice == "rock") {
			handleGameResult(userChoice, computerChoice, "computer");
		} else if (computerChoice == "paper") {
			handleGameResult(userChoice, computerChoice, "user");
		} else draw(userChoice, computerChoice);
	} else if (userChoice == "rock") {
		if (computerChoice == "paper") {
			handleGameResult(userChoice, computerChoice, "computer");
		} else if (computerChoice == "scissor") {
			handleGameResult(userChoice, computerChoice, "user");
		} else {
			draw(userChoice, computerChoice);
		}
	}
};

const hiderules = () => {
	rulesItem.style.display = "none";
};

const showrules = () => {
	rulesItem.style.display = "flex";
};
