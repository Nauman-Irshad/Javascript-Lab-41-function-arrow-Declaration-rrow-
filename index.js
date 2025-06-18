
let sum = 0;
let i=1;
while(i <= 10){
    sum = sum + i;
    i++;
}

console.log(sum);

function  printcounting(){
    console.log("Start here ");
}
    printcounting();
// 1*1=1

    function printtable(num,num1){
        for (let i=1 ;i<= 11;i++){
          
let num2= num1*num;
 console.log (num,num1,"=",num2);
 num1= num1+1;          
        }
    }
    printtable(4,1);

function avg(num1, num2){

    let avg = (num1+num2)/2;
    console.log("avg =",avg);
}
avg(10,20);

function sum5(a,s,d){
    sum5= a+s+d;
    return sum5;
}
let sum1= sum5(1,2,3);
let sum2 = sum1;
 sum2= 0;
sum1= sum2;
console.log(sum1);

function char(first, second){
let full_name = first +" "+second;

return full_name;
}
 let full_name = char("asa","sdas");
 console.log(full_name); 

function printname(f,l)
{
    let full= f +" "+l;
    return full;
}
let fulll = printname("name:","nauman irshad ");
console.log(fulll);

let simple = function(s,l){
    return s**l;    
}
let full = simple(2,2);
console.log(full);

let f= (x,y) =>{
let sum=x+y;
    return sum;

}
console.log(f(12,23));