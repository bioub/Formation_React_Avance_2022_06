const _ = require('lodash');

// _.memoize
// _.throttle
// _.debounce

let todos = (new Array(20_000_000)).fill({}).map(() => ({
  id: Math.random(),
  text: 'A' + Math.floor(Math.random() * 26),
  completed: Math.random() >= 0.5
}));

function todosCompletedCount(todos) {
  return todos.filter((t) => t.completed).length;
}

const todosCompletedCountMemo = _.memoize(todosCompletedCount);

// 1er render
console.time('todosCompletedCountMemo');
console.log(todosCompletedCountMemo(todos) + ' todos completed');
console.timeEnd('todosCompletedCountMemo');

// mise à jour du tableau muable
// en modifiant la mémoire du tableau existant
// todos.push({
//   id: Math.random(),
//   text: 'A' + Math.floor(Math.random() * 26),
//   completed: true
// });

// mise à jour du tableau immuable
// en créant un nouveau tableau
todos = [
  ...todos,
  {
    id: Math.random(),
    text: 'A' + Math.floor(Math.random() * 26),
    completed: true
  }
]

// function memo(fct) {
//   let cacheVal;
//   let cacheReturn;
//   return function(val) {
//     if (val === cacheVal) {
//       return cacheReturn;
//     }
//     cacheReturn = fct(val);
//     cacheVal = val;
//     return cacheReturn;
//   }
// }

// 2e render
console.time('todosCompletedCountMemo');
console.log(todosCompletedCountMemo(todos) + ' todos completed');
console.timeEnd('todosCompletedCountMemo');

// 3e render
console.time('todosCompletedCountMemo');
console.log(todosCompletedCountMemo(todos) + ' todos completed');
console.timeEnd('todosCompletedCountMemo');

function todosCount(todos) {
  return todos.length;
}


const todosCountMemo = _.memoize(todosCount);

// 1er render
console.time('todosCountMemo');
console.log(todosCountMemo(todos) + ' todos');
console.timeEnd('todosCountMemo');

// 2e render
console.time('todosCountMemo');
console.log(todosCountMemo(todos) + ' todos');
console.timeEnd('todosCountMemo');

// 3e render
console.time('todosCountMemo');
console.log(todosCountMemo(todos) + ' todos');
console.timeEnd('todosCountMemo');


// 1er render
console.time('todosCount');
console.log(todosCount(todos) + ' todos');
console.timeEnd('todosCount');

// 2e render
console.time('todosCount');
console.log(todosCount(todos) + ' todos');
console.timeEnd('todosCount');

// 3e render
console.time('todosCount');
console.log(todosCount(todos) + ' todos');
console.timeEnd('todosCount');

