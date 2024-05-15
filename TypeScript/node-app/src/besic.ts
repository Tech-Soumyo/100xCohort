function greet(firstName: string) {
  console.log("Hello " + firstName);
}

greet("harkirat");

// How to give type to a fn
function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(2, 3));

// how to assign a return type to a function
function isLegal(age: number): boolean {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}
console.log(isLegal(2));

// how to give type to a function that has been passed as an argument to another function

function runAfter1s(fn: () => void) {
  setTimeout(fn, 1000);
}

runAfter1s(function () {
  console.log("hi there");
});
