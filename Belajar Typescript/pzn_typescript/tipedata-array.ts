// array
let names: string[] = ["Arrizky", "Hasya", "Pratama"];
let fruits: Array<number> = [1, 2, 3, 4, 5]

names[1] = "Callahan"

console.log(names[1])
console.log(fruits[4])

// tuple
let student: [string, string, number] = ["Ariz", "256", 14]
let product: [string, number] = ["Laptop", 7000000]

console.log(student[2])
console.log(product[1])

product[1] = 2000000

console.log(product[1])

let namesLagi: Array<string> = [];
namesLagi.push("Arrizky");
namesLagi.push("Hasya");
namesLagi.push("Callahan")

delete namesLagi[0]
delete namesLagi[2]

console.log(namesLagi)