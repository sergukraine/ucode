Array.prototype.removeDuplicate = function(){
    let result = [];
    for(let i =0; i < this.length ; i++){
        
        if(result.indexOf(this[i]) == -1 && this[i] != "") result.push(this[i]);
        
    }
    
    return result;
 }

function addWords(obj, wrds){
    

     let str = obj.words.replace(/\s+/g,",") + "," + wrds.replace(/\s+/g,",");
     obj.words = str.split(",").removeDuplicate().join(" ").toString();
     return obj;
}

function removeWords(obj, wrds){
    let objArr = obj.words.replace(/\s+/g,",").split(",");
    let wrdsArr = wrds.replace(/\s+/g,",").split(",");

    for(let i =0; i < wrdsArr.length; i++){
            let index = objArr.indexOf(wrdsArr[i]);
            if(index != -1) objArr.splice(index, 1);
                
    }
    obj.words =objArr.join(" ").toString();
    return obj;
}

function changeWords(obj, oldWrds, newWrds){

        removeWords(obj, oldWrds);
        addWords(obj, newWrds);
      
}

const obj= {words: 'newspapers       newspapers  books     magazines'};
console.log(obj); 
// {words: "newspapers newspapers  books magazines"}
addWords(obj, 'radio newspapers      ');

console.log(obj); 
// {words: "newspapers books magazines radio"}

removeWords(obj, 'newspapers   radio');

console.log(obj); 

// {words: "books magazines"}
changeWords(obj, 'books radio  magazines', 'tv    internet');

console.log(obj); 
// {words: "tv internet"}