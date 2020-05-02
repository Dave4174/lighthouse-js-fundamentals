function loopyLighthouse(range, multiples, words) {
  for (let x = range[0]; x <= range[1]; x++) {
    if (x % multiples[0] === 0 && x % multiples[1] !== 0) {
      console.log(words[0]);
    }
    else if (x % multiples[0] !== 0 && x % multiples[1] === 0) {
      console.log(words[1]);
    }
    else if (x % multiples[0] === 0 && x % multiples[1] === 0) {
      console.log(words[0]+words[1]);
    }
    else {
      console.log(x);
    }
  }
}

console.log(loopyLighthouse([1, 10], [2, 5], ["Batty", "Beacon"]));