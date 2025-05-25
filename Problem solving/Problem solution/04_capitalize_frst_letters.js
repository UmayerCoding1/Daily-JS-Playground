const capitalizedFirstLetters = (str) => {
    if (str.length  === 0) {
        return console.log('string is empty');
    }
  const words = str.split(" "); // str = (umayer hossain) => output = ["umayer", "hossain"]
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length > 0) {
      let capitalizedWord = word[0].toUpperCase();

      // Append rest of the word unchanged
      for (let j = 1; j < word.length; j++) {
        capitalizedWord = capitalizedWord +  word[j];
      }
      result =result +  capitalizedWord;
    }

    if(i < word.length - 1){
        result += ' ';
    }
  }

  return console.log(result);
};

 capitalizedFirstLetters('umayer hossain');
 capitalizedFirstLetters('i am form bangladesh');
 capitalizedFirstLetters('');

