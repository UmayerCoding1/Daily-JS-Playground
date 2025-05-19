
function compareTwoNumbers (num1,num2) {
    if(num1 > num2){
        console.log(num1);
    }
    else if(num2 > num1) {
        console.log(num2);
    }
    else{
        console.log('Equal');
    }
} 

compareTwoNumbers(10,5);
compareTwoNumbers(10,15);
compareTwoNumbers(10,10);