/*
For this quiz, you're going to create a function called buildTriangle() that will accept an 
input (the triangle at its widest width) and will return the string representation of a triangle. 
See the example output below.

buildTriangle(10);
Returns:

* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * * 
* * * * * * * 
* * * * * * * * 
* * * * * * * * * 
* * * * * * * * * * 

We've given you one function makeLine() to start with. The function takes in a line length, a
nd builds a line of asterisks and returns the line with a newline character.

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}
You will need to call this makeLine() function in buildTriangle().

This will be the most complicated program you've written yet, so take some time thinking through 
the problem before diving into the code. What tools will you need from your JavaScript tool belt? 
Professionals plan out their code before writing anything. 
Think through the steps your code will need to take and write them down in order. 
https://www.notion.so/specifix/Intro-to-JavaScript-99223e373677439a9a8746db60c88969#73e8f26dcb0e45ccaef9fc26cabd3bb9Then go through your list and convert each step into actual code. Good luck!
*/

/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle (widthTriangleBase) {
  var triangle = "";
  for (var i = 1; i <= widthTriangleBase; i++) {
      triangle += makeLine(i); 
  }
  return triangle;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));
