

var rl=require("readline-sync");
var year= Number(rl.question("which year you want to know the century of?\n"))
function whichCenturyIs(year){
    var century=Math.ceil(year/100)
    var suffix = "th"
	if (century % 100 >= 10 && century % 100 <= 20) {
		suffix = "th"
	} else if (century % 10 === 1) {
		suffix = "st"
	} else if (century % 10 === 2) {
		suffix = "nd"
	} else if (century % 10 === 3) {
		suffix = "rd"
	}

	return century + suffix + " century"
}

// var century = 

