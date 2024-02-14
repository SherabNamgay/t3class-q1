// var result = "Tom is at his computer.".split("")
// const restrictedWords = ["banana", "orange", "apple", "peach", "grape"]

// function checkUsername(username) {
// 	var isUserNameOk = true

// 	for (var i = 0; i < restrictedWords.length; i += 1) {
// 		var includesRestrictedWord = username.includes(restrictedWords[i])
// 		if (includesRestrictedWord) {
// 			isUserNameOk = false
// 		}
// 	}

// 	return isUserNameOk
// }

// console.log(checkUsername("mike45")) // true
// console.log(checkUsername("apple45")) // false

var result = "john hames fones"

// for (var i=0; i<userName.length; i++){
//     var singleNames=userName[i].split("")
//     // singleNames[0]=singleNames[0].toUpperCase()
// retrun singleNames
// }
// console.log(singleName)
// console.log(userName)


//  SOLUTION !!!!!
var splitIntoWords = result.split(" ")

for (var i = 0; i < splitIntoWords.length; i ++) {
	var currentWord = splitIntoWords[i]
	var lettersOfCurrentWord = currentWord.split("")
    lettersOfCurrentWord[0] = lettersOfCurrentWord[0].toLocaleUpperCase() // diff
	// var capitalizedLetter = lettersOfCurrentWord[0].toLocaleUpperCase()
	// lettersOfCurrentWord[0] = capitalizedLetter
	var capitalizedWord = lettersOfCurrentWord.join("")
	splitIntoWords[i] = capitalizedWord
}
const capitalizedName = splitIntoWords.join(" ")
console.log(capitalizedName)