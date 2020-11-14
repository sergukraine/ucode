let number = 8,
multiplyer = 1,
table = "";

while(multiplyer < 10){
table += number + " * " + multiplyer + " = " + (Number(number*multiplyer))+"\n";
multiplyer++;
}
alert(table);