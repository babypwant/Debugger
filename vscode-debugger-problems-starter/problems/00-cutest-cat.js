/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.

*/

function cutestCat(cats) {
  let cutest = {};
  let i = 0;
  debugger;
  while (i < cats.length) {
    debugger;
    let cat = cats[i];
    let cuteness = cat.cuteness;
    debugger;
    if (cuteness > i) {
      i = cuteness;
      cutest = cat;
    }
    debugger;
    i++;
  }

  return cutest;
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]

console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }