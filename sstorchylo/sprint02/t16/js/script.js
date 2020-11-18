"use strict";

function firstElements(arr, n){
    if(n > 0 && n <= arr.length){
        return arr.slice(0, n);
    }
    if(n > arr.length) return arr;
    return [];
}

/*var heroes= ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];

console.log(firstElements(heroes, 5));
// ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]
console.log(firstElements(heroes, 1));
// ["Captain America"]
console.log(firstElements(heroes, 3));
// ["Captain America", "Hulk", "Thor"]
console.log(firstElements(heroes, 6));
// ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]
console.log(firstElements(heroes, -1));*/