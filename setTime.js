const removeDuplicates = (arr) => [...new Set(arr)];
const apmRootPath = path.join(repositoryRootPath, 'apm');
const copyToClipboard = (text) => navigator.clipboard.writeText(text);