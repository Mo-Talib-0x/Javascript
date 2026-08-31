const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

// 1.
const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
console.log(huskyWeight);

// 2.

const dogBothActivities = breeds.find(
  breed =>
    breed.activities.includes('fetch') && breed.activities.includes('running'),
).breed;
console.log(dogBothActivities);

// 3.
const allActivities = breeds.flatMap(breed => breed.activities);
console.log(allActivities);

// 4.
const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

// 5.
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(breed => breed.activities.includes('swimming'))
      .flatMap(breed => breed.activities),
  ),
].filter(activity => activity !== 'swimming');
console.log(swimmingAdjacent);

// 6.
console.log(breeds.every(breeds => breeds.averageWeight > 10));

// 7.
console.log(breeds.some(breeds => breeds.activities.length >= 3));

// Bonus

const fetchWeights = breeds
  .filter(breed => breed.activities.includes('fetch'))
  .map(breed => breed.averageWeight);

const heaviestAverageWeight = Math.max(...fetchWeights);
console.log(fetchWeights)
console.log(heaviestAverageWeight);
