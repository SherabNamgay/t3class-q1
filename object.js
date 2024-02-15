function removeVowels(someString){
    var toremove={
    vowels:"aeiou"
    }
    for (var i=0; i<someString.length; i++){
        if (toremove.vowels.includes(someString[i])){
            var newString=someString.replace(new RegExp(toremove, 'gi'), "")
            // var newString=
        }
    }
    return(newString)
}
// console.log(toremove.vowels)

console.log(removeVowels("gOOdbye"))