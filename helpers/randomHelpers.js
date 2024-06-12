function debounce(callback, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, delay);
  };
}

function throttle(func, delay) {
  let timeout = null;
  return (...args) => {
    if (!timeout) {
      func(...args);
      timeout = setTimeout(() => {
        timeout = null;
      }, delay);
    }
  };
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = { getRandomInt, throttle, debounce };
