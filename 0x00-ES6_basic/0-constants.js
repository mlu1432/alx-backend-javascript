// Function to demonstrate the use of const for variable declaration
export function taskFirst() {
  // Using const to declare a constant variable
  const task = 'I prefer const when I can.';
  return task;
}

// Function to return a string that will be appended
export function getLast() {
  return ' is okay';
}

// Function to demonstrate the use of let for variable declaration and string concatenation
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
