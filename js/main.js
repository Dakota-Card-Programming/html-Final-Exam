console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
/* 
    Name: Dakota Card
    Student Number: 200453912
*/

// Step 2: Create a block scoped, immutable variable that stores an empty array
const array = [];

// Step 3: Add the 3 people's names to the array
array.push("Dakota");
array.push("Shaun");
array.push("John");

// Step 4: Remove the second array item from the array


// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable
const result = array.map(function (arrayItem){
    return arrayItem.toUpperCase();
});

// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";
document.querySelector('#main-content h2').addEventListener("click", clickAlert);

function clickAlert(){
    alert("Hello from Boo the World's Cutest Dog!");
}