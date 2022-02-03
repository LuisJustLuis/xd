function doSomething (num: number) {
    if (Gender == 1) {
        game.splash("What grouping of letters is to your liking?")
    } else if (Gender == 2) {
        game.splash("What grouping of letters is to your liking?")
    } else if (Gender == 3) {
        game.splash("What grouping of letters is to your liking?")
    }
}
let Gender = 0
let boy_list = ["ethanol", "sanwich", "xd"]
let girl_list = ["that time of month", "coil", "flobber"]
let neutral_list = ["aluminum ", "floride", "gold"]
game.splash("Welcome to Baby Name generator 2022")
game.splash("What is the gender of the baby?")
Gender = game.askForNumber("Press 1 for boy. 2 for girl, and 3 for neutral ", 1)
doSomething(Gender)
