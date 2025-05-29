


const mostFrequentElement = (arr) => {
  if (arr.length === 0) return null;
  const frequencyMap = {};
  let maxFreq = 0;
  let result = null;



  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    // count the frequency
    if (frequencyMap[item]) {
      frequencyMap[item]++;
    } else {
      frequencyMap[item] = 1;
    }

    

    //    Update result only if:
    if (frequencyMap[item] > maxFreq) {
      maxFreq = frequencyMap[item];
      result = item;
    }
  }
  return result;
};

const freqResult = mostFrequentElement([1, 2, 2, 2, 5, 6, 5,5,5]);

console.log(freqResult);


console.log();
