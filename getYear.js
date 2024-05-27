console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const stringReverse = str => str.split("").reverse().join("");
const arrayContains = (arr, element) => arr.includes(element);