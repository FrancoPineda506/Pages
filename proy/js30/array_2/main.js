// ## Array Cardio Day 2
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

const esAdulto = people.some( persona => ( (new Date()).getFullYear() - persona.year >= 19 ));  //some == almenos 1 elemento cumple

console.log({esAdulto});

// Array.prototype.every() // is everyone 19 or older?

const sonAdultos = people.every( persona => ( (new Date()).getFullYear() - persona.year >= 19 ));  //every == todos los elemento cumplen
console.log({sonAdultos});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const comentario = comments.find( comentario => comentario.id === 823423)
console.log({comentario});

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423);

// comments.splice(index,1)

const newcoments = [
    ...comments.slice(0,index),
    ...comments.slice(index + 1)
];