function gettingOfVowels(someString){
    var counter=0
    for (var i=0; i<someString.length; i++){
        if ("aeiou".includes(someString[i])){
            counter+=1
        }
    }
    return counter
}
console.log(gettingOfVowels("hello my name is sherab"))
