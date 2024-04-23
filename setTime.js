const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const isArray = (arr) => Array.isArray(arr);
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');