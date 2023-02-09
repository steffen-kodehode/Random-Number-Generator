const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let randomStringOne = document.getElementById("random-string-one");
let randomStringTwo = document.getElementById("random-string-two");

function randomNumberGeneratior() {
  let password1 = "";
  let password2 = "";
  for (let i = 0; i < characters.length; i++) {
    password1 += characters[Math.floor(Math.random() * characters.length)];
  }
  for (let i = 0; i < characters.length; i++) {
    password2 += characters[Math.floor(Math.random() * characters.length)];
  }

  randomStringOne.textContent = password1.slice(0, 15);
  randomStringTwo.textContent = password2.slice(0, 15);
}

randomNumberGeneratior();
// console.log(randomNumberGeneration());
