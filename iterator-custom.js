
// example of custom iterator:

const randomNumber = require('random-number');

function randomItem(array) {
  const randomIndex = randomNumber({
    min: 0,
    max: array.length - 1,
    integer: true
  });
  return array[randomIndex];
}

const makeCharacter = () => {
  const characterSizes = ['small', 'medium', 'large'];
  const characterAbilities = ['skateboarding', 'guitar-playing', 'skiing'];
  const newCharacter = `You have produced a ${randomItem(characterSizes)} ${randomItem(characterAbilities)} person`;
  console.log(newCharacter);
  return newCharacter;
}

makeCharacter();

// custom iterator
const castOfCharacters = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        const enoughCharacters = Math.random() > .9;
        if (!enoughCharacters) {
          return {
            value: makeCharacter(),
            done: false
          }
        }
        return {done: true}
      }
    }
  }
}

for (const character of castOfCharacters) {
  console.log(character);
}

// the takeaway is that we can create iterators to generate things randomly.
