function sayHello(name) {
  console.log('Hi ' + name);
}

sayHello();

// Rewriting into arrow function

const sayHello= (name)=>{
  console.log('Hi ' + name);
}

sayHello();


// With Two Arguments
const sayHello = (phrase, name) => {
  console.log(phrase + ' ' + name);
};

sayHello('Hello', 'Alice'); 

//  With No Arguments
const sayHello = () => {
  const phrase = 'Hi';
  const name = 'Alice';
  console.log(phrase + ' ' + name);
};

sayHello();

// With One Returned Value
const sayHello = (name) => {
  return 'Hi ' + name;
};

console.log(sayHello('Alice')); 


// Add a default argument to the function you created: A fallback value for the phrase if no value is provided.
const sayHello = (phrase = 'Hi', name) => {
  console.log(phrase + ' ' + name);
};

sayHello('Hello', 'Alice'); // Output: Hello Alice
sayHello(undefined, 'Bob');


// Add a new function: "checkInput" which takes an unlimited amount of arguments (unlimited amount of strings) and executes a callback function if NO argument/ string is an empty string.
const sayHello = () => {
  console.log('All inputs are valid!');
};

checkInput(sayHello, 'Alice', 'Bob', 'Charlie'); // Output: All inputs are valid!
checkInput(sayHello, 'Alice', '', 'Charlie');    // No output, as one argument is an empty string