var superheroAnimal = prompt("We have 3 questions before we generate Hero name: \n" +
"1) What animal is the superhero most similar to?");

if (nameValidation(superheroAnimal)){
     var superheroGender = prompt("2) Is the superhero male or female? Leave blank if unknown or other.");
     if(genderValidation(superheroGender)){
         var superheroAge = prompt("How old is the superhero?");
         if(ageValidation(superheroAge)){
            alert("The superhero name is: " + makeName(superheroAnimal,superheroGender,superheroAge) + "!");
         }
     }

}

function nameValidation (myInput){
     var myReg = /[a-z]/gi;
     var inputLength = myInput.length;
     if(inputLength == 0){
         alert ("Input is empty - reload the page to start again");
         return false;
     }
     if (inputLength <= 20){
         var answer = myInput.match(myReg);
         if (answer.length != inputLength){
             alert ("Not correct input  - reload the page to start again");
             return false;
         }else{
             return true;
         }
     }else{
         alert ("Input should be less or equal 20 characters!- reload the page to start again");
         return false;
     }
}

function genderValidation(myInput){
     if (myInput.length == 0){
         console.log("Input is empty")
         return true;
     }
     let Input = myInput.toLowerCase();
     if(Input == "male" || Input == "female"){
         return true;
     }else{
         alert("Not correct input, allowed answerd: male, female or blank - reload the page to start again");
         return false;
     }
}

function ageValidation(myInput){
     var inputLength = myInput.length;
     if(inputLength > 0 && inputLength <= 5 && myInput[0]!="0"){
         if(Number.isInteger(Number(myInput))){
             return true;
         }else{
             alert("Input not a Number, numbers allowed only - reload the page to start again")
         }
     }else{
         alert("Wrong age, can't be empty or more then 5 digits or start from 0 - reload the page to start again")
     }
}

function makeName(name, gender, age){
    let superheroName = name;
    if (gender.toLowerCase() == "male" && Number(age) < 18) superheroName += "-boy";
    if (gender.toLowerCase() == "male" && Number(age) >= 18) superheroName += "-man";
    if (gender.toLowerCase() == "female" && Number(age) < 18) superheroName += "-girl";
    if (gender.toLowerCase() == "female" && Number(age) >= 18) superheroName += "-woman";
    if (gender.length == 0 && Number(age) < 18) superheroName += "-kid";
    if (gender.length == 0 && Number(age) >= 18) superheroName += "-hero";
    return superheroName;
}