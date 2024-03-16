let animals = {
  cat: 10,
  wolf: 11,
  fox: 9,
  dog: 8,
};

const sortedAnimals = Object.entries(animals).sort((a, b) => b[1] - a[1]);

const objectOfSortedAnimals = Object.fromEntries(sortedAnimals);

const keysOfSortedAnimals = Object.keys(sortedAnimals);

console.log(keysOfSortedAnimals);
