const createCounter = (n) => {
    let count = n;

   return  function () {
     return count++

    } 
}

const counter = createCounter(5);
console.log(counter()); 
console.log(counter());

