// I'm going to constantly update an array as the user uses the calculator. "result" is going
// to hold all the number and operators the user has clicked on.
//
// For the mathematical calculation ive declared the variables "numOne" and "numTwo"
//

let result = []
let numOne
let numTwo
let finalResult

// I want to monitor when the user presses any given number so im using click events to monitior
// when the user presses a button 0-9

// I selected ".clear" because i want to clear out all the elements when the user pushes the "c" button
// I'm using "result.splice" because I want to be able to change the contents of the array that is being displayed as the result
// when i used the code  "$("#input").empty()" im hoping to remove all the elements and by doing so clear the user input

$(".clear").on("click", function() {
    result.splice(0)
    $("#input").empty()
})

//when someone presses on the button 1 i want the number 1 to show up in the input
//im using the ".push()" method on my array "result" hoping to push 1 or any given
//number in the array into my input so the user can see what they're calculating

$("#1").on("click", function() {
    result.push(1)
    $("#input").html(result)
})

$("#2").on("click", function() {
    result.push(2)
    $("#input").html(result)
})

$("#3").on("click", function() {
    result.push(3)
    $("#input").html(result)
})

$("#4").on("click", function() {
    result.push(4)
    $("#input").html(result)
})

$("#5").on("click", function() {
    result.push(5)
    $("#input").html(result)
})

$("#6").on("click", function() {
    result.push(6)
    $("#input").html(result)
})

$("#7").on("click", function() {
    result.push(7)
    $("#input").html(result)
})

$("#8").on("click", function() {
    result.push(8)
    $("#input").html(result)
})

$("#9").on("click", function() {
    result.push(9)
    $("#input").html(result)
})

$("#0").on("click", function() {
    result.push(0)
    $("#input").html(result)
})

$("#decimal").on("click", function() {
    result.push(".")
    $("#input").html(result)
})

//I need to be able to process calculations on the user 1st 2 inputs before I take on any other
// inputs from the user. To do this I need to check whether or not the 1st mathematical operator
// is not the last index in the array, basically i want to make sure the user didnt enter 2
// mathematical operators into 1 calculation. Otherwise do the calculation.
//

function calculation() {
    result.forEach(function(element, index, array) {
        //check if 2 mathematical operators exist in the array
        if (
            isNaN(parseInt(element)) &&
            element != "." &&
            index != result.length - 1
        ) {
            numOne = result.splice(0, index).join("")
            numTwo = result.splice(1, result.length - 2).join("")

            if (element == "+") {
                finalResult = parseFloat(numOne) + parseFloat(numTwo)
            }

            if (element == "-") {
                finalResult = parseFloat(numOne) - parseFloat(numTwo)
            }

            if (element == "x") {
                finalResult = parseFloat(numOne) * parseFloat(numTwo)
            }

            if (element == "/") {
                finalResult = parseFloat(numOne) / parseFloat(numTwo)
            }

            result[0] = finalResult

            $("#input").html(finalResult)
        }
    })
}

//to check if anything exists in result, and if anything exists in finalResult
function empty() {
    if (parseFloat(finalResult) != 0 && result.length == 0) {
        result[0] = finalResult
    }
}

//click on calc signs and process calculation
$("#plus").on("click", function() {
    empty()
    result.push("+")
    $("#input").html(result)
    calculation()
})

$("#minus").on("click", function() {
    empty()
    result.push("-")
    $("#input").html(result)
    calculation()
})

$("#divide").on("click", function() {
    empty()
    result.push("/")
    $("#input").html(result)
    calculation()
})

$("#X").on("click", function() {
    empty()
    result.push("x")
    $("#input").html(result)
    calculation()
})

// finally, when the user presses the equal sign I want return the result from the "results"
// array in the input. So when the equal sign is pressed and the ".forEach" method is triggered
// the cpu will loop through every index in the array created by the user inputs.
// the .forEach method can take 3 parameters: element, index, and array.
//
// I want to use the first 2 parameters to figure out what inputs are numbers
// and what inputs are mathematical operators and i should be able to do that if i use conditional
// statements once i know which is which I can perform the calulation
//
// I need to figure out which element is actually a mathematical operator, to make that happen
// I used the ".parseInt" method on the element when i loop through the array to convert
// the string passed by the array into a interger, then I use the isNaN method to find out whether
// or the the element being passed in is a number or not.
//
// Because I want the users to be able to input a decimal number, I also need to check if the
// the element being passed in is a dot. Any element that is not a number and also not a decimal
// has to be a mathematical operator.
//
// I'm going to use the mathmatical operators to determine the length of the user input.
// No matter how many numbers the user inputs im going to join them together and parsed them
// into number as soon as they select a mathematical operator.
//
// To make that happen i will used the array.splice()method and as the cpu is looping through the
// passed in array and it comes upon the mathematical operator the .splice method will use the
// array's index to seperate the two numbers. The .splice method take 2 parameters the first
// is the starting postion the secound is the index of where to cut the string.
//
// "numOne" will hold the variable the user enters before the mathematical operator, so in terms of
// of the array the starting position will always be 0 and the length of the numOne element will be
// determine by the index of the operator and by using the the .join method along with the .parseInt
// method i can join the approprate strings and turn it into a number so its ready for calculation.
//
// As for "numTwo" is assiged value will be the user secound input. And the logic of this input will
// be very similar to "numOne" but because I used the splice method the orginal array has been modified
// and now the operator passed in by the user now has and index of 0. So when i apply the .splice method
// to get the 2nd value the user inputed, i need to to begin the .splice method at a position index of 1.
// Which will be the index immediately after the mathematical operator.
//
// The 2nd parameter "numTwo" is optional, because i want all the numbers that exist after operator
// its not required for the program to know the number of indexes for "numTwo".
//
// Now that I have two variable holding to seperate numbers, i need to process the calculation
// by using 4 seprate if statments I can check which operator was inputed and perform the
// appropriate calculation.
//
// Once the calculation has been performed it will be assiged the variable "finalResult"
// and then shown on the wb page using the ".html" method.
//
// lastly, i used the ".splice" method again to empty the result array, so the whole process can be
// done again once the user makes a new input.

$("#equal").on("click", function() {
    result.forEach(function(element, index, array) {
        if (isNaN(parseInt(element)) && element != ".") {
            numOne = result.splice(0, index).join("")
            numTwo = result.splice(1).join("")

            if (element == "+") {
                finalResult = parseFloat(numOne) + parseFloat(numTwo)
            }

            if (element == "-") {
                finalResult = parseFloat(numOne) - parseFloat(numTwo)
            }

            if (element == "x") {
                finalResult = parseFloat(numOne) * parseFloat(numTwo)
            }

            if (element == "/") {
                finalResult = parseFloat(numOne) / parseFloat(numTwo)
            }

            $("#input").html(finalResult)
            result.splice(0)
        }
    })
})