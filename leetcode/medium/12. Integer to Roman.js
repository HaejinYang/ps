/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let target = num;
  let result = [];
  while (target !== 0) {
    const data = nearestRoman(target);
    result.push(data.ch);
    target -= data.val;
  }

  return result.join("");
};

function nearestRoman(num) {
  let ch = "I";
  let val = 1;
  do {
    if (num >= 1000) {
      ch = "M";
      val = 1000;

      break;
    }

    if (num >= 900) {
      ch = "CM";
      val = 900;

      break;
    }

    if (num >= 500) {
      ch = "D";
      val = 500;

      break;
    }

    if (num >= 400) {
      ch = "CD";
      val = 400;

      break;
    }

    if (num >= 100) {
      ch = "C";
      val = 100;

      break;
    }

    if (num >= 90) {
      ch = "XC";
      val = 90;

      break;
    }

    if (num >= 50) {
      ch = "L";
      val = 50;

      break;
    }

    if (num >= 40) {
      ch = "XL";
      val = 40;

      break;
    }

    if (num >= 10) {
      ch = "X";
      val = 10;

      break;
    }

    if (num >= 9) {
      ch = "IX";
      val = 9;

      break;
    }

    if (num >= 5) {
      ch = "V";
      val = 5;

      break;
    }

    if (num >= 4) {
      ch = "IV";
      val = 4;

      break;
    }
  } while (false);

  return {
    ch,
    val,
  };
}
