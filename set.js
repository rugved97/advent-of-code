const set1 = new Set([1, 2, 3, 4, 5, [0,0]]);
let array = [ [1,2], [3,4]]

for(let a of array) {
  set1.add(a)
}

for(let pj of array) {
  console.log(set1.has(pj)) //true HOWWW!!!!!
  console.log(set1.has([1,2])) // false
}
console.log(set1.size) //8
let a = [1,2]
set1.add(a)
let b = [1,2]
set1.add(b)
console.log(set1.size) //10

for (let i of set1.values()) {
 console.log(i) // 1 2 3 4 5 Array [0, 0] ,Array [1, 2],Array [3, 4],Array [1, 2],Array [1, 2]
 console.log(set1.has(b)) //true
 console.log(set1.has(a)) //true
 console.log(a) //Array [1, 2]
 console.log(b) //Array [1, 2]
 console.log(a == b) //false
}

console.log(set1.has(1));
//expected output: true

console.log(set1.has(5));
//expected output: true

console.log(set1.has(6));
//expected output: false
