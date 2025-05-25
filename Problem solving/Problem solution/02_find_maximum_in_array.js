

function findMaxNumber(arr) {
    if (arr.length <= 0 ) {
        return console.log('Array is empty');
    }
   let maxNum = 0;

   for(const num of arr){
       if(num > maxNum){
          maxNum = num
       }
   }

   return console.log(maxNum);
}

findMaxNumber([1,4,6,8,20]);
findMaxNumber([]);