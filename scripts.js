/*
 * Programming Quiz: Laugh (5-4)
 */

let laugh = function(num) {
  let str = "";
  for (var i = 0; i < num; i++) {
    str += "ha";
  }
  return str + "!";
};

console.log(laugh(3));
