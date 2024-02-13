var rl= require('readline-sync');
var story = ""

story = story + "Once upon a time, there lived a person named "

var userName=rl.question("what's your name?")
    story=story + userName + "."
    story=story + "they were "
    
var age= rl.question("what is your age?")
    story=story + age + " years old. "
    story=story + "they came from the beautiful village of "

var villageName= rl.question("where is your village?")
    story=story + villageName + "."
    story=story + "They were playing "

var sportName= rl.question("what is your fav sport?")
    story=story + sportName+"."
    story=story + "It was all peaceful until an army of giant "
                
var animalName= rl.question("which animal is your least fav?")
    story=story + animalName + "s attacked them and"
    story=story+ " " +userName+ " got hit on his "
                     
var facePart=rl.question("which is your fav feature on your face?")
    story=story+facePart+". The end"
    console.log(story)
