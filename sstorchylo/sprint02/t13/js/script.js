function getPromt(){
    var promtInput;
    promtInput = prompt("Input a number from 1 to 10: ");  
    while(
          promtInput == null ||
          !isFinite(promtInput) ||
          promtInput < 1 ||
          promtInput > 10){
          promtInput = prompt("Invalid number? \n Please input a number from 1 to 10: ");   
    }
    return Number(promtInput);  
}
var digit = getPromt();

switch(digit) {
  case 1:
    alert("Back to square 1");
    break;
  case 2:
    alert("Goody 2-shoe");
    break;
  case 3:
  case 6:
    alert("Two's company, three's a crowd");
    break;
  case 4:
  case 9:
    alert("Counting sheep");
    break;
  case 5:
    alert("Take five");
    break;
  case 7:
    alert("Seventh heave");
    break;
  case 8:
    alert("Behind the eight-bal");
    break;
  case 10:
    alert("Cheaper by the dozen");
    break;            
} 