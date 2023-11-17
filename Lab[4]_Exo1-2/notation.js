function mean(scores) {
    if (scores.length === 0) {
        return 0; 
    }
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return sum / scores.length;
  }
  
  module.exports = mean;
  