// 8. Use search to find the position of the first occurrence of the word because 
//in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

const paragraph = "You cannot end a sentence with because because because is a conjunction"

const searchTerm = 'because';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);

