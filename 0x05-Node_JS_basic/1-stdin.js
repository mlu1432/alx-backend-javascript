/**
 * This program prompts the user for their name and displays a welcome message.
 * It listens for the user's input and responds with a personalized message.
 * Upon program termination, it logs a closing message.
 */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  process.exit();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
