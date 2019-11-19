function comp(a,b,c){
    var min = 0;
    if(a < b && a <c)
    min = a;

    if(b < a && b <c)
    min = b;

    if(c < a && c <b)
    min = c;

    console.log("The minimum is " + min);

    var min = 0;
    if(a > b && a >c)
    max = a;

    if(b > a && b > c)
    max = b;

    if(c > a && c > b)
    max = c;

    console.log("The maximum is " + max);
    
}
console.log(comp(3,33,13))