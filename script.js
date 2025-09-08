// =======================
// PART 1: JavaScript Basics
// =======================

// Variables and Conditionals
let userAge = 18; // Example variable

if (userAge >= 18) {
  console.log("You are an adult!");
} else {
  console.log("You are a minor!");
}

// =======================
// PART 2: Functions
// =======================

// Function 1: Greet User
function greetUser() {
  const name = document.getElementById("username").value;
  const message = name ? `Hello, ${name}!` : "Please enter your name!";
  document.getElementById("greeting").textContent = message;
}

// Function 2: Toggle Text Visibility
function toggleText() {
  const text = document.getElementById("toggle-text");
  text.style.display = (text.style.display === "none") ? "block" : "none";
}

// =======================
// PART 3: Loops
// =======================

// Loop 1: For loop to display numbers
function showNumbers() {
  const list = document.getElementById("number-list");
  list.innerHTML = ""; // Clear old content
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = `Number: ${i}`;
    list.appendChild(li);
  }
}

// Loop 2: While loop example (console only)
let count = 3;
while (count > 0) {
  console.log(`Countdown: ${count}`);
  count--;
}

// =======================
// PART 4: DOM Interactions
// =======================

// 1. Button click to greet user
document.getElementById("greet-btn").addEventListener("click", greetUser);

// 2. Button click to show numbers
document.getElementById("show-numbers").addEventListener("click", showNumbers);

// 3. Button click to toggle text visibility
document.getElementById("toggle-btn").addEventListener("click", toggleText);
