const concatResult = (result, counter, currentWord) => {
  while(counter > 0) {
    if (counter <= 9) {
      result += `${counter}${currentWord}`;
      counter = 0;
    } else {
      counter = counter - 9;
      result += `9${currentWord}`;
    }
  }

  return result;
}


const main = (input) => {  
  const listWords = input.split('');
  
  let counter = 0;
  let result = '';

  if (listWords.length === 1) {
    result = concatResult(result, 1, listWords[0]);
  }


  for(let i = 0; i < listWords.length - 1; i++) {
    const currentWord = listWords[i];
    const nextWord = listWords[i + 1];
  
    counter++;
    if (currentWord === nextWord && listWords.length - 2 === i) {
      result = concatResult(result, counter + 1, currentWord);
      counter = 0;
    }
    else if (currentWord !== nextWord && listWords.length - 2 === i) {
      result = concatResult(result, counter, currentWord);
      result = concatResult(result, 1, nextWord);
    }
    else if (currentWord !== nextWord) {
      result = concatResult(result, counter, currentWord);
      counter = 0;
    }

  }

  return result;

}

const tests = [
  {
    "string": "AAAAAAAAAAAAABBCCCCDD",
    "output": "9A4A2B4C2D"
  },
  {
    "string": "aA",
    "output": "1a1A"
  },
  {
    "string": "AAAAAAAAAAAAABBCCCCDDA",
    "output": "9A4A2B4C2D1A"
  },
  {
    "string": "AAAAAAAAAAAAABBCCCCDDAE",
    "output": "9A4A2B4C2D1A1E"
  },
  {
    "string": "a",
    "output": "1a"
  },
  {
    "string": "abc",
    "output": "1a1b1c"
  }
]

for(const test of tests) {
  const result = main(test.string);
  console.log(`Input: ${test.string}`);
  console.log(`Output: ${result}`);
  console.log(result === test.output, '\n')
}

