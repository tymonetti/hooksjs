const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const isTabInView = () => !document.hidden;