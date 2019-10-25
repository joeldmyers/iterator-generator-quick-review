// Sets -

// unique values. Same in Python!

// great for deduping

const set1 = new Set([1, 2, 3, 4, 5]);

// it has a method .has() on it to see if it's in it.

const has1InIt = set1.has(1);

// true.


// Symbols -

// use for unique keys.  Unique and immutable data type.

// new primitive in ES6


let symbol1 = Symbol('string1');
let symbol2 = Symbol('string1');

// symbol1 !== symbol2
// each is unique.

// To convert to string, do:
console.log(`symbol 1 is ${symbol1.toString()}`);

// two use cases -

// 1. Unique property keys - we can use a symbol to ensure there are no collisions

// 2. For Constants -

const COLOR_RED = Symbol('Red');



// then we can use this const and be sure nothing else is mistaken for it, no collisions etc.

/** ITERATORS **/

const names = ["John", "Mary", "Bob"];

for (const char of names[0]) {
  console.log(char);
  // iterators work with a next() method
  // it's helpful, because we can go over many different types.  characters.
  // string object provides an iterator.  Set, dom node.
  // we can make our own custom objects iterable!
}

// strings, objects, arrays etc. have iterator.
