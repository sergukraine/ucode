function solver(a, b, c, d, e){
    
    if (typeof(a)=="number" && typeof(b)=="number" &&
    typeof(c)=="number" && typeof(d)=="number" &&
    typeof(e)=="number") {
       let x = a ** 2 - 5 * b * c + d / 3 + e;
        return Number.parseFloat(x).toFixed(2);
    }
    else return "Wrong input"
    
}
