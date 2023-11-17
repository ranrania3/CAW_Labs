myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString()); console.log(myColor.join());
console.log(myColor.join(''));
function joinWithDefaultSeparator() {
    return myColor.join();
  }
  
  function joinWithEmptyStringSeparator() {
    return myColor.join('');
  }
  
  module.exports = {
    joinWithDefaultSeparator,
    joinWithEmptyStringSeparator,
  };