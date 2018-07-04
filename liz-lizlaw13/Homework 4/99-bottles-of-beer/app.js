/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: Each console.log will place your statement on a new line.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/

// we want to always print: 
// "99 bottles of beer on the wall, 99 bottles of beer."
// "Take one down and pass it around, 98 bottles of beer on the wall."

// every line after this we must subtract 0 from current number  

for(let i = 99; i > 0; i--){
  // the value of i changes here
  console.log(i, "bottles of beer on the wall", i, "bottles of beer.Take one down and pass it around,", i, "bottles of beer on the wall.");
}
