function add(n1, n2){
    return n1 +n2;
 }
 
 function addVersion2(n1, n2, ...rest){
    return n1 +n2 + rest.reduce((acc,cur)=> acc +cur)
 }
 
 function mul(n1, n2){
     return n1 * n2;
 }
 
 const sub = function(n1,n2){
   return n1 - n2
 }
 
 const cb = function(n1,n2,callback){
   return "Result from the two numbers: "+n1+" + "+n2+" = "+callback(n1,n2)
 }
 
 console.log( add(1,2) )     // 3
 console.log( add )          // It is the pointer to the function, so it will print the function
 console.log( add(1,2,3) ) ; // 3, as it only takes the first two arguments
 console.log( add(1) );  // NaN, as it tries to add 1 and undefined
 console.log( cb(3,3,add) ); // 6
 console.log( cb(4,3,sub) ); // 1
 console.log(cb(3,3,add())); // A TypeError because instead of using the function add, it uses the return value of add, which is undefined
 console.log(cb(3,"hh",add));// 3hh as JS can add a number and a string
 console.log(addVersion2(1,2,3,4,5,6,7,8,9,10)) // 55
 console.log(cb(2,5,mul)) // 10