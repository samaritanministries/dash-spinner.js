import Baz from "dash_spinner/baz.js"
const Baz2 = require('dash_spinner/baz.js');

console.log("bar.js");
var bar = () => {
  console.log("bar function");
}
console.log(Baz);
console.log(Baz2.default);
bar()
