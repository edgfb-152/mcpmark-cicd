// This file intentionally contains linting errors to demonstrate the workflow

const unusedVariable = "this will trigger no-unused-vars error"

function greet(name) {
  console.log("Hello, " + name)  // Missing semicolon and using double quotes
}

greet("World")
