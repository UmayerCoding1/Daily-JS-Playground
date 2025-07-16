
async function repeat (delay) {
    return new Promise((resolve) => setTimeout(resolve,delay));
}

const repeatMessage = async (message,time , delay) => {
  
    for(let i = time ; i >= 1; i--){
        console.log(message);
        await repeat(delay);
    }
    
   
   
}




console.log(repeatMessage('Hello world', 5,1000));