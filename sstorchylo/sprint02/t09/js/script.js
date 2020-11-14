function displayHero(team, universe, race, eyeColor, hairColor){
    if (
        (team == "Avengers" || team == "S.H.I.E.L.D") &&
        (universe == "Marvel") &&
        (race == "human") &&
        (eyeColor == "green") &&
        (hairColor == "lightBrown/green")
       ){
        alert("This is Black Widoy!");
       }
       else if (
        (team == "Justice League Of America" || team == "Teen Titans") &&
        (universe == "DC Comics") &&
        (race == "human" || race == "kryptonian") &&
        (eyeColor == "blue") &&
        (hairColor == "black")
       ){
        alert("This is Superman or Robin");
       }
       else {
           alert("Didn't recognize!");
       }
}
/*
var Team = prompt ("Input team:");
var Universe = prompt ("Input universe:");
var Race = prompt ("Input race:");
var EyeColor = prompt ("Input eye color:");
var HairColor = prompt ("Input hair color:");

displayHero(Team, Universe, Race, EyeColor, HairColor);
*/