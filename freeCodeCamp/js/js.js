// -------------
// GENERAL
// -------------

// quotes are not the only characters that can be escaped inside a string.
// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \t	tab
// \r	carriage return
// \b	backspace
// \f	form feed

// const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
// note thatI used \n, \t, \\, \n respectively

// ------

// note that using '+' along with two string, it concatenate both of them. 
// const myStr = "This is the start." + " " + "This is the end."; // Change this line

// ------

// we know the length of a sting using ".length"
// let lastNameLength = 0;
// const lastName = "Lovelace";
// lastNameLength = lastName.length;
// it'l display 8 on the console 

// ------
// (REMEMBER!)in js, string are immutable, we cannot change it unless we reassign it.
// ------

// we can find the last character by subtract one from the string.length 
// since lastName.length we count by one, we subtract one buz in order to get the last one since it start by 0. 
// const lastName = "Lovelace";
// const lastLetterOfLastName = lastName[lastName.length -1];

// -------------
// ARRAYS
// -------------
// We can nest arrays within other arrays, and it's called MULTI-DIMENSIONAL arrays. 
// const myArray = [["nested one", 1], ["nested two", 2]];

// ------

// We can access the data inside arrays using indexes.
// unlike characters, we are specify entries. 
// const myArray = [50, 60, 70];
// let myData = myArray[0]
// why this is important?
// take a look:
// let news = [1,2];
// const myData = [10, 30, 40, news];
// console.log(myData[3][1]) // this way we have gotten the value 2

// ------

// push()
// ".push() is used when we want to push elements, arrays, whatever to the end of our array."
// const myArray = [["John", 23], ["cat", 2]];
// myArray.push(["dog", 3])

// ------

// pop.()
// pop.() works like push, the diference is that instead of add, it removes it 
// const myArray = [["John", 23], ["cat", 2]];
// let removedFromMyArray = myArray.pop()

// ------

// .shift()
// .shift() has the same purpose as .pop(), but it doesn`t remove the last one, it removes the first one.
// const myArray = [["John", 23], ["dog", 3]];
// let removedFromMyArray = myArray.shift()

// ------

// unshift.()
// unshift.() add elements to the beginning of our Array.
// and just like push.() we need to specify what we are putting into it. obvious.
// const myArray = [["John", 23], ["dog", 3]];
// myArray.shift();
// myArray.unshift(["Paul", 35])  




















