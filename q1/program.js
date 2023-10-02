// q1~q14

// 1. 
/* Write a function named middle that finds the middle value of three numbers. The function takes three numbers as parameters
 and returns the middle value. The middle value means the value that is greater than the smallest value and less than the 
 largest value.
 */

 function getMid(num1, num2, num3){ 

    if((num1 >= num2 && num1 <=num3) || (num1 <= num2 && num1 >= num3) ) {
        return num1;
    } else if ((num2 >= num1 && num2 <= num3)||(num2 <= num1 && num2 >= num3)) {
        return num2;
    } else {
        return num3;
    }
   
 }

 // console.log(getMid(5, 10, 7));






