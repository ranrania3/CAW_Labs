
const myColor = ["Red", "Green", "White", "Black"];

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
