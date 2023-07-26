const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
  "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"
];

let key1El = document.getElementById("key1")
let key2El = document.getElementById("key2")

let key2G = ""

function generateRandomCharacter() {
  let randomNum = Math.floor(Math.random() * characters.length)
  return characters[randomNum]
}

function gen() {
  let key1G = ""
  for (let i = 1; i < 16; i++) {
    key1G += generateRandomCharacter()
  }
  key1El.textContent = key1G
	
	 let key2G = ""
  for (let i = 1; i < 16; i++) {
    key2G += generateRandomCharacter()
  }
  key2El.textContent = key2G
}


