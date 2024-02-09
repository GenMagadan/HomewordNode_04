// var obj = [
//   { name: 'Max', age: 23 },
//   { name: 'John', age: 20 },
//   { name: 'Caley', age: 18 },
// ];
const library = [
  {
    id: 1,
    author: 'Azimov',
    book_title: 'Base',
    number_of_book_characters: 50000,
    genre: 'fantastic',
  },
  {
    id: 2,
    author: 'Heinlein',
    book_title: 'Starship Troopers',
    number_of_book_characters: 100000,
    genre: 'fantastic',
  },
  {
    id: 3,
    book_title: 'Onegin',
    author: 'Pushkin',
    number_of_book_characters: 60000,
    genre: 'poetry',
  },
  {
    id: 5,
    author: 'Azimov',
    book_title: 'The gods themselves',
    number_of_book_characters: 100000,
    genre: 'fantastic',
  },
  {
    id: 4,
    author: 'Azimov',
    book_title: 'The gods themselves',
    number_of_book_characters: 100000,
    genre: 'fantastic',
  },
  {
    id: 6,
    author: 'Azimov',
    book_title: 'The gods themselves',
    number_of_book_characters: 100000,
    genre: 'fantastic',
  },
];
const uniqueID = library.map(({ id }) => id);
console.log(uniqueID);

const isUniform = (arr) => {
  let uniChecker = 1;
  for (i = 0; i < arr.length; i++) {
    if (uniChecker === arr[i]) {
      uniChecker++;
    }
  }
  return uniChecker;
};

console.log(isUniform(uniqueID));
