const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const result = await makeHttpRequest(url);