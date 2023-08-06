//Regular Expression Methods

//search() Tests for a match in a string and returns the index of the match. It returns -1 if the search fails.
console.log('Harsh oza'.search(/oza/)); //6

//replace()	Searches for a match in a string and replaces the matched substring with a replacement substring.
console.log('Harsh oza'.replace(/oza/,'string foo'));

//match()	Returns an array containing all the matches. It returns null on a mismatch.
console.log('Harsh oza hero oza'.match(/oza/));

//test()	Tests for a match in a string and returns true or false.
console.log(/oza/.test('Harsh oza hero oza'));