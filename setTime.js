const results = await Promise.all(resultingPromises);
const uniqueArray = arr => [...new Set(arr)];
const fullName = name || 'buddy';