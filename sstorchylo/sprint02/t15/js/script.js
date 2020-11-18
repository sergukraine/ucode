
function checkDivision(beginRange, endRange){
    var i = beginRange;
    var str = "";
    for (i; i <= endRange; i++){
        if(i % 2 == 0){
            str += " is even";
            if(i % 3 == 0){
                str += ", is multiple of 3";
                if(i % 10 == 0){
                    str += ", is multiple of 10";
                    console.log(i + str + "\n");
                    str = "";
                    continue;
                }
  
                console.log(i + str + "\n");
                str = "";
                continue;
            } 
            if(i % 10 == 0){
                str += ", is multiple of 10";
                console.log(i + str + "\n");
                str = "";
                continue;
            }
            console.log(i + str + "\n");
            str = "";
            continue;
        }
        if(i % 3 == 0) {
            str += " is multiple of 3";
            console.log(i + str + "\n");
            str = "";
            continue;
        }
        if(i % 10 == 0) {
            str += " is multiple of 10";
            console.log(i + str + "\n");
            str = "";
            continue;
        }
        console.log(i + " - " + "\n");
        str = "";
    }
}

let num1 = +prompt('Enter begin range number: ', 1),
    num2 = +prompt('Enter end range number: ', 100);

if (Number.isInteger(num1) && Number.isInteger(num2)) {
  if (num1 <= num2)
    checkDivision(num1, num2);
  else
    checkDivision(num2, num1);
} else {
  alert('Wrong input. Try again!');
}