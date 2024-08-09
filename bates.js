const apmRootPath = path.join(repositoryRootPath, 'apm');
const resultingPromises = urls.map((url) => makHttpRequest(url));
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';