const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.


/* const zucchineLong =[] */

/* for (let i = 0; i < zucchine.length; i++) {
  const zucchineLong = zucchine[i];
  if (zucchineLong.length <= 15){
    zucchine.push(zucchineLong)
  }
}

console.log(zucchineLong);
 */


/* const restOfzucchine = []

for (let i = 0; i < zucchine.length; i++) {
  const restOfzucchine = zucchine[i];
  if (restOfzucchine.length > 15) {
    zucchine.push(restOfzucchine)
  }
}
  
console.log(restOfzucchine);
 */

const long = zucchine.filter((element) => element.length > 15)

console.log(long);


const rest = zucchine.filter((element) => element.length <= 15)

console.log(rest);
