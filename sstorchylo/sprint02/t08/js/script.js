var inpNumber = Number(prompt("Insert number from 1 to 4:"));

if(Number.isInteger(inpNumber)) {
    switch(inpNumber) {
        case 1:
            alert(inpNumber*2/'a');
          break;
        case 2:
            alert((inpNumber - inpNumber)/0);
          break;
        case 3:
            alert(0*Infinity);
          break;
        case 4:
            alert((inpNumber*40000000) == Infinity);
          break;
        default:
            alert("Wrong input");
      }
}
else {
    alert("Wrong input");
}
