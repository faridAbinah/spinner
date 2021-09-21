process.stdout.write('hello from spinner1.js... \rheyyy\n');
///r is going to take our cursor back to the beginning
let delay = 0;
//We can refactor our spinner code by simply storing all the characters in an array, looping through the array.
//Every time we loop we will call our setTimeout function increasing the delay so we can see the animation.
let characters = ["|","/","-","\\","|","/","-", "\\"];

for(const char of characters) {
  delay += 200;

  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  },delay)
}




 setTimeout(() => {
 process.stdout.write('\n'); }, delay + 200);