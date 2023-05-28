const cowsay = require('cowsay');

function say(text) {
  console.log(cowsay.say({ text }));
}
function changeAppearance() {
  console.log(cowsay.say({ text: 'I look different now!',e:"dead" }));
}
changeAppearance()
module.exports = {
  say,
  changeAppearance,
};