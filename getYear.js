[foo, bar] = [bar, foo];
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");