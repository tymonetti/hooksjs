const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");