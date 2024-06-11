const channel = getChannel(computedAppVersion);
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};