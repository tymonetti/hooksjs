const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const buildOutputPath = path.join(repositoryRootPath, 'out');
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const currentDate = () => new Date().toLocaleDateString('en-US');
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));