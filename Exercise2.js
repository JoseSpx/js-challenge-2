
const main = (input) => {
  const result = input.map((x) => Math.pow(x, 2));
  result.sort((a, b) => a - b);
  return result;
}

const tests = [
  {
    "array": [1, 2, 3, 5, 6, 8, 9],
    "output": [1, 4, 9, 25, 36, 64, 81]
  },
  {
    "array": [-2, -1],
    "output": [1, 4]
  },
  {
    "array": [0, -1],
    "output": [0, 1]
  },
  {
    "array": [-2],
    "output": [4]
  }
];

for(const test of tests) {
  const result = main(test.array);
  console.log(`Input: ${test.array}`);
  console.log(`Output: ${result}`);
  console.log(result.toString() === test.output.toString(), '\n')
}




