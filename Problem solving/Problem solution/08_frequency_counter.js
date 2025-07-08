const charFrequency = (str) => {
 
    let frcq = {};

    for(const char of str.toLowerCase()){
        if(char === ' ') continue;

        frcq[char] = (frcq[char] || 0) + 1

    }
  
    return frcq;
};


console.log(charFrequency('Hello world'));


// Hello WOrld;
