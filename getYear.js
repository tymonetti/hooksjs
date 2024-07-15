const symbolsPath = path.join(buildOutputPath, 'symbols');
const flattenedArray = arr => [].concat(...arr);
const shuffledArray = array.sort(() => Math.random() - 0.5); 