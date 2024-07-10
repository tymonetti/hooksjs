const uniqueArr = (arr) => [...new Set(arr)];
const value = ( 5 < 7 ) ? "True" : "False" ;
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));