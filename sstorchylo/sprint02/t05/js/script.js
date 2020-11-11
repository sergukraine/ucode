var str1 = "You're catnip to a girl like me. Handsome, dazed, and to die for...";

var str1Length = str1.length;

function findCharacter (index, str){
    let res = str.slice(index, ++index);
    return res;
}

var uppercaseStr1 = str1.toUpperCase();

var concatinationStr1 = str1 + " - Catwoman";

var str2 = "Batman: \"I tried to save you.\"";

var str3 = "Selina Kyle: catwoman\"Mmm seemsCatwomanlike everyCatWomanwoman you try to save windsCatWOMANup dead... or deeply resentful.\"";

var replacedStr3 = str3.replace(/catwoman/ig," ");

alert("Just string: " + str1 + 
  "\nLength: " + str1Length +
  "\nCharacter number 2 is: " + findCharacter(2,str1) +
  "\nTo uppercase " + uppercaseStr1 +
  "\nConcatenation in a phrase: " + concatinationStr1 + 
  "\n[Batman Returns] " + str2 + 
  "\n" + replacedStr3);