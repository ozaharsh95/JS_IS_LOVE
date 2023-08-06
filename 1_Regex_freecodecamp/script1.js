

//1) Using a regular expression litreal

/*
const regexLiteral=/Hello/gi;
const regexString="Hello ji ehello";
console.log(regexString.match(regexLiteral));
// Output: ["Hello","hello"]
*/

//2)Using regExp constructor

/*
const regexConstructor=new RegExp('oza','g');
const regexConstructor1=new RegExp('oza','gi');
const str="Oza harsh oza is zao";
console.log(str.match(regexConstructor));
console.log(str.match(regexConstructor1));
*/



//we can pass dynamically string or/and pattern


/*
const pattern=prompt("Enter the Pattern");

const regexConstructor2=new RegExp(`${pattern}`,'gi');
console.log(str.match(regexConstructor2));
*/


//Use of metacharacters '^' and '$'

// '^' matches the start of a line and anchors a literal at the beginning of that line.

/*
const pattern1=/^harsh/;
console.log(pattern1.test('oza harsh is gold'));
//false
console.log(pattern1.test('harsh oza is boy'));
//true

//without '^'
const pattern2=/harsh/;
console.log(pattern2.test('oza harsh is gold'));
//true
console.log(pattern2.test('harsh oza is boy'));
//true
*/

//'$' matches the end of a line and anchors a literal at the end of that line.


/*
const pattern3=/tom$/;
console.log(pattern3.test('tom and jerry cartoon'));
//false
console.log(pattern3.test('jerry and tom'));
//true
*/


/*
  + ^ and $ match just the position of the characters in the pattern and not the actual characters themselves.

  + '\b' matches the start or end of a word. 
*/

/*
const dtr="oza boy is Boygg in Boysroom at boomboy";

// Syntax 1: /\b.../ 
// where .... represents a word.
// Search for a word that begins with the pattern boy
const pattern4=/\bboy/gi;

// Syntax 2: /...\b/
// Search for a word that ends with the pattern ward
const pattern5=/boy\b/gi;

// Syntax 3: /\b....\b/
// Search for a stand-alone word that begins and end with the pattern ward
const pattern6=/\bboy\b/gi;

console.log(dtr.match(pattern4));
console.log(dtr.match(pattern5));
console.log(dtr.match(pattern6));
*/
 
/**
 * 
 *  \d – matches any decimal digit and is shorthand for [0-9].
    \w – matches any alphanumeric character which could be a letter, a digit, or an underscore. \w is shorthand for [A-Za-z0-9_].
    \s – matches any white space character.
    \D – matches any non-digit and is the same as [^0-9.]
    \W – matches any non-word (that is non-alphanumeric) character and is shorthand for  [^A-Za-z0-9_].
    \S – matches a non-white space character.
    . – matches any character.
 
    */


// character class '[]'
// A character class is used to match any one of several characters in a particular position.

/* example

const regexPattern=/jod[ia]dar/;

console.log(regexPattern.test('jodidar'));//true
console.log(regexPattern.test('jodadar'));//true
*/

// The regex pattern interprets as:  find j followed by o, then d,
// then either i or a, then d, then a, and then r.


// Negated Charcter Class '[^...]'

/*If you add a caret symbol inside a character class like this [^...], it will match any character that is not listed inside the square brackets.*/


/*
const patternNegated=/[^kos]za/;

console.log(patternNegated.test('oza'));//false
console.log(patternNegated.test('xoza'));//false
console.log(patternNegated.test('lza'));//true
*/


// Range '-'
// [0123456789] -> [0-9]
// [abcdefg]    -> [a-g]

//Alternation '|'

/*
    For example, (x|y|z)a will match xa or ya, or za.  In order to limit the reach of the alternation, you can use parentheses to group the alternatives together.

    Without the parentheses, x|y|za  would mean x or y or za. For example
 */

/*
const pattern=/(bob|jhon)\sMarley/;
console.log(pattern.test('bob Marley')); //true
console.log(pattern.test('jhon Marley')); //true
*/

// Qauntifiers -> '+' , '*' , '?'

// '+' match at least one charcter

/*
const Ptr=/oza+s/;

console.log(Ptr.test('ozas'));     //true
console.log(Ptr.test('ozaaaaas')); //true
console.log(Ptr.test('ozs'));      //false
/*


// '*' match at least one + none

/*
const Str=/oza*s/;

console.log(Str.test('ozas'));     //true
console.log(Str.test('ozaaaaas')); //true
console.log(Str.test('ozs'));      //true
*/


// '?' it means the character may or may not appear // it's optional

/*
const Qtr=/oza?s/;

console.log(Qtr.test('ozas'));  //true
console.log(Qtr.test('ozs'));   //true
*/

// {}

/*
const ptr=/a{2,4}/;

console.log('banana'.match(ptr));        //no match
console.log('bananaa'.match(ptr));       //aa
console.log('bananaaa'.match(ptr));      //aaa
console.log('bananaaaa'.match(ptr));     //aaaa
console.log('bananaaaaaa'.match(ptr));   //aaaa
*/

//Greedy matching -> (default behaviour) regular expression engine will try to match as much text as possible

// non-greedy behaviour ->  also known as lazy matching, tries to match as little text as possible.

//To remove this default state and make them non-greedy, you append a ? to the operator like this +?, *?, {N}?, {N,M}?.....and so on.

/*
const gtr=/a{2,4}?/;

console.log('banana'.match(gtr));        //no match
console.log('bananaa'.match(gtr));       //aa
console.log('bananaaa'.match(gtr));      //aa
console.log('bananaaaa'.match(gtr));     //aa
console.log('bananaaaaaa'.match(gtr));   //aa

//Non-greedy matches as min as posibble.
*/


//Grouping

const regExp = /abc+(xyz+)+/i;

console.log(regExp.test('abcxyzzzzXYZ')); // Output: true

/*
Here's what the pattern means: The first + matches the c of abc, the second + matches the z of xyz, and the third + matches the subexpression xyz, which will match if the sequence repeats.
*/

