function computePolkadotScore(input) {
  const rows = input.split('\n');

  let leftBoundary = -1;
  let rightBoundary = -1;

  for (let r = 0; r < rows.length; r++) {
    const current = rows[r];
    if (current.includes('(') && current.includes(')') && current.includes("'''")) {
      leftBoundary = current.indexOf('(');
      rightBoundary = current.lastIndexOf(')');
      break;
    }
  }
  let eyeChars = 0;
  rows.forEach(line => {
    for (let ch of line) {
      if (ch === 'o') {
        eyeChars++;
      }
    }
  });

  let dotsInRange = 0;
  let dotsOutRange = 0;

  rows.forEach(line => {
    for (let idx = 0; idx < line.length; idx++) {
      if (line[idx] === 'O') {
        if (idx >= leftBoundary && idx <= rightBoundary) {
          dotsInRange++;
        } else {
          dotsOutRange++;
        }
      }
    }
  });

  return dotsOutRange + (dotsInRange * eyeChars);
}

module.exports = computePolkadotScore;