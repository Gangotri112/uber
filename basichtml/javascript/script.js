//let pi=3.14
//function pare(r){
  //  console.log(2*pi*r)
//}

//pare(5)

let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;

console.log("Temperature in Fahrenheit: " + fahrenheit);

let age= 15;
if(age>=18)
{
    console.log("your eligible to vote");
}
else
{
    console.log("your are not eligible to vote");
}

let a=10
let b=2
console.log(a)
console.log(b)
console.log( a + b)
let left=(a+b)^3
console.log("LHS::"+left)

let right=a^3+b^3+3*a ^2 *b+3*a* b^2
console.log("RHS::"+right)
if(left==right){
    console.log("VERIFIED")
}else{
    console.log("NOT VERIFIED")
}


function speedandheight(h1,h2,v1,v2){
    if(v1==v2){
        return h1==h2;
    }
    let diff=h2-h1;
    let diffspeed=v1-v2;

    if((diff/diffspeed)==1){
        return true;
    }else{
        return false;
    }
}
console.log(speedandheight())

