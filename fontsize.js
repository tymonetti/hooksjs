const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const result = await makeHttpRequest(url);