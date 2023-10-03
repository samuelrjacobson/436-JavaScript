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