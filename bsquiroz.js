brayan = {
  each: (array, fn) => {
    for (let i = 0; i < array.length; i++) {
      fn(array[i]);
    }
  },

  filter: (array, fn) => {
    const filteredData = [];
    for (let i = 0; i < array.length; i++) {
      if (fn(array[i])) {
        filteredData.push(array[i]);
      }
    }
    return filteredData;
  },

  map: (array, fn) => {
    const newData = [];
    for (let i = 0; i < array.length; i++) {
      newData.push(fn(array[i]));
    }
    return newData;
  },

  find: (array, fn) => {
    for (let i = 0; i < array.length; i++) {
      if (fn(array[i])) {
        return array[i];
      }
    }
  },

  findIndex: (array, fn) => {
    for (let i = 0; i < array.length; i++) {
      if (fn(array[i])) {
        return i;
      }
    }
  },

  contains: (array, fn) => {
    for (let i = 0; i < array.length; i++) {
      if (fn(array[i])) {
        return true;
      }
    }
    return false;
  },

  without: (array, num) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === num) {
        array.splice(i, 1);
      }
    }
    return array;
  },

  pluck: (array, fn) => {
    const newData = [];
    for (let i = 0; i < array.length; i++) {
      newData.push(fn(array[i]));
    }
    return newData;
  },
};

const stooges = [
  { name: "jorge", age: 45 },
  { name: "brayan", age: 17 },
  { name: "stiven", age: 32 },
];

const numbers = [1, 22, 3, 41, 5];

brayan.each(numbers, (number) => console.log(number));

const biggerThan20 = brayan.filter(numbers, (number) => number > 20);
console.log(biggerThan20);

const addOne = brayan.map(numbers, (number) => number * 2);
console.log(addOne);

const findFirtsNumber = brayan.find(numbers, (number) => number === 41);
console.log(findFirtsNumber);

const findFirtsIndex = brayan.findIndex(numbers, (number) => number === 41);
console.log(findFirtsIndex);

const numberFind = brayan.contains(numbers, (number) => number === 5);
console.log(numberFind);

const propietyFind = brayan.pluck(stooges, (toy) => toy.name);
console.log(propietyFind);

const newArray = brayan.without(numbers, 55);
console.log(newArray);
