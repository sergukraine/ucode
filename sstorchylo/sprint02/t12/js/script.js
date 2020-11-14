var triaLength = prompt("Input trangle length, should be a number: ");
var i, result = "";

for (i = 1; i <= triaLength; i++) {
    result += "*".repeat(i)+ "\n";
  }
 alert(result); 