const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();