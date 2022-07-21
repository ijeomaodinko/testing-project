const slength = function (strg1){
    const strgLen = strg1.length
  if (strgLen >1  && strgLen < 10 ) {
  return strgLen
  }else {
  return("error! enter again");
  }
}
  
  module.exports = slength;