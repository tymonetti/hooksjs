const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);