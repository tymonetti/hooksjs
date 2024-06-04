const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const minNumber = arr => Math.min(...arr);
const arrayContains = (arr, element) => arr.includes(element);