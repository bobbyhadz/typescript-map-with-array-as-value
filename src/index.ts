export {};

// EXAMPLE 1 - Define a Map with Array values in TypeScript

const map1 = new Map<number, string[]>([
  [0, ['a', 'b']],
  [1, ['c', 'd']],
]);

map1.set(2, ['e', 'f']);

// 👇️ ['e', 'f']
console.log(map1.get(2));

// ---------------------------------------------------

// // EXAMPLE 2 - Declaring a Map with an Array of Objects as values in TypeScript

// type Employee = {
//   name: string;
//   salary: number;
// };

// const map1 = new Map<number, Employee[]>([
//   [
//     0,
//     [
//       { name: 'Alice', salary: 100 },
//       { name: 'Bobby Hadz', salary: 150 },
//     ],
//   ],
// ]);

// const arr: Employee[] = [];

// arr.push({ name: 'Carl', salary: 200 });
// arr.push({ name: 'Dean', salary: 250 });

// map1.set(1, arr);

// // 👇️ [{name: 'Carl', salary: 200}, {name: 'Dean', salary: 250}]
// console.log(map1.get(1));

// ---------------------------------------------------

// // EXAMPLE 3 - Use a type guard to make sure the value is not undefined

// type Employee = {
//   name: string;
//   salary: number;
// };

// const map1 = new Map<number, Employee[]>([
//   [
//     0,
//     [
//       { name: 'Alice', salary: 100 },
//       { name: 'Bobby Hadz', salary: 150 },
//     ],
//   ],
// ]);

// map1.set(1, [{ name: 'Carl', salary: 200 }]);

// // 👇️ const result: Employee[] | undefined
// const result = map1.get(1);

// // ✅ If statement as a type guard
// if (result !== undefined) {
//   console.log(result[0]); // 👉️ {name: 'Carl', salary: 200}
// }

// // ✅ Optional chaining as a type guard
// console.log(result?.[0]?.name); // 👉️ "Carl"
