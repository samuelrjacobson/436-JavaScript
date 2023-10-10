// #2
/*
 Write a function named factors that finds the factors of a number. The function takes a
 number as a parameter and returns a string. The string contains the factors separated by commas
 and spaces. The factors include 1 and the number. The number is a positive integer.
 */

function factors(n)
{
    var stringOfFactors = "1"   // 1 is the first factor.
    for (var i = 2; i <= n / 2; i++) // check each number 2 to (n / 2)
    {
        if (n % i == 0) // if it's a factor of n, add it to string
        {
            stringOfFactors += ", " + i
        }
    }
    stringOfFactors += ", " + n    // add number itself to string
     
    return stringOfFactors
}

// #4
/* Write a function named stdDev that computes the standard deviation of a set of numbers. 
 The function takes the numbers as a variable number of parameters and returns the standard 
 deviation. The standard deviation of n numbers x1, x2 . . . xn is the square root of 
 [((x1-m)2 + (x2-m)2 + . . . + (xn-m)2)/n] where m is the average of the 
 numbers. If there are less than two numbers the standard deviation is 0.
 */

 function stdDev()
 {
     // calculate average of numbers
     let sum = 0
     for (var i = 0; i < arguments.length; i++)
     {
         sum += arguments[i]
     }
     const average = sum / arguments.length
     
     // calculate standard deviation
     let stdDeviation = 0
     for (var i = 0; i < arguments.length; i++)
     {
         stdDeviation += Math.pow(arguments[i] - average, 2)
     }
     stdDeviation /= arguments.length
     stdDeviation = Math.sqrt(stdDeviation)
     
     return stdDeviation
 }
 
 //#6
 /* Write a function that takes a character as a parameter and returns its type. The possible types 
  are upper, lower, digit, and other. Upper means an upper case letter. Lower means a 
  lower case letter. Digit means a numerical digit. Other means all other characters. The return 
  value is a string in lower case. Regular expressions cannot be used.
  */
 
 function checkType(ch)
 {
     if("0" <= ch && ch <= "9") return "digit"	// digit
     else if("a" <= ch && ch <= "z") return "lower"	// lowercase
     else if("A" <= ch && ch <= "Z") return "upper"	// uppercase
     else return "other"				// special character
 }
 
 // #8
 /* Write a function named removeDuplicates that takes an array of strings as parameter and 
  returns a duplicate free array. The calling/parameter array does not change. The unique strings of
  the calling array are placed in a newly created array and it is returned. For example if the calling 
  array is [tree, cat, box, cat, dog, tree, tree] then the returned array is 
  [tree, cat, box, dog].
  */
 
 function removeDuplicates(inArray)
 {
     // declare outArray to return later
     let outArray = []
     
     // for every value in inArray, add it to outArray if not in outArray yet
     for(let inVal of inArray)
     {
         let isDuplicate = false
 
         for (let outVal of outArray)
         {
             // determine whether value in inArray is already in outArray
             if(inVal == outVal)
             {
                 isDuplicate = true
                 break
             }
         }
         // push value from inArray to outArray if it is unique
         if(!isDuplicate)
         {
             outArray.push(inVal)
         }
     }
     
     return outArray
 }
 