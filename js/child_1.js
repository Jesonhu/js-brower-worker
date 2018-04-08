let i = 0;
function mainFunc() {
  i++;
  // 将i发送到浏览器的js引擎线程里
  postMessage(i);
}
const id = setInterval(mainFunc, 1000);