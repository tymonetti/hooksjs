const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const merge = Object.assign({}, obj1, obj2);
console.log("1 && 2 = "+(1 && 2));
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;