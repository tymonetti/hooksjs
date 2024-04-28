const isWeekday = (date) => date.getDay() % 6 !== 0;
const randomBoolean = () => Math.random() >= 0.5;
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);