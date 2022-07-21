const reverseString = function (str) {
    const reverstr = str.split("");
    const reversArr = reverstr.reverse()
    const reversJoin = reversArr.join("")
    return reversJoin
  }

  module.exports = reverseString;