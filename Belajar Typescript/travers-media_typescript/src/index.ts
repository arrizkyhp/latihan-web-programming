// Basic Types
// =============================================
let id: number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = 'Hello'

// No error cause (any)
x = 12

// Type Array with number value
let ids: number[] = [1, 2, 3, 4, 5]
// ids.push('Hello') // Error because push string

let arr: any[] = [1, "hello", true]

// Tuple
// =============================================
let person: [number, string, boolean] = [1, "Hello", false]
// Tuple Array
let employee: [number, string][]
employee = [
    [1, "Bandung"],
    [2, "Jakarta"],
    [3, "Batam"],
    // Error
    // [true, "Bogor"]
]

// Union
// =============================================
// String and number
let idUnion: string | number = 22
idUnion = "22"

// Enum
// =============================================
enum Direction1 {
    Up, // 0
    Down, // 1
    Left, // 2
    Right // 3
}

enum Direction2 {
    Up = 1, // 1
    Down, // 2
    Left, // 3
    Right // 4
}

enum Direction3 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

console.log(Direction2.Left) // 3
console.log(Direction1.Up) // 0
console.log(Direction3.Right) // Right

// Objects
// =============================================
// method 1
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: "John"
}

// method 2
type User = {
    id: number,
    name: string
}

const user2: User = {
    id: 1,
    name: 'Gina'
}

// Type Assertion
// =============================================
let cid: any = 1

// method 1
let customerId = <number>cid

// Error
// customerId = true

// method 2
let customerId2 = cid as number

// Functions
// =============================================
function tambah(x: number, y: number): number {
    return x + y
}

// Error
// console.log(tambah(1, '2'))
console.log(tambah(1, 2)) // 3

// Void
// =============================================
const log = (message: string | number): void => {
    console.log(message)
}

log('Hello') // Hello
// log(true) // error

// Interfaces
// =============================================
interface UserInterface {
    // readonly
    readonly id: number,
    name: string
    // optional
    age?: number
}

const user3: UserInterface = {
    id: 1,
    name: 'Gina'
}

// user3.id = 3 //error because id is readonly

// interface with function
interface MathFunc {
    (x: number, y:number): number 
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y
console.log(add(5, 7)) // 12
console.log(sub(7, 5)) // 2

// Classes
// =============================================
class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const leo = new Person(1, "Leonardo Davinci")
const mike = new Person(2, "Michael Angelo")

console.log(mike);
console.log(leo.register()) // Leonardo Davinci is now registered

// Interface on Class
interface PersonInterface {
    id: number
    name: string
    register(): string
}

class Person2 implements PersonInterface{
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

// Subclasses
class Employee extends Person2 {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, "Gunlah", "Backend Web Programmer")
console.log(emp.name) // Gunlah
console.log(emp.register()) // Gunlah is now registered

// Generics
// =============================================
const getArray = (items: any[]): any[] => {
    return new Array().concat(items)
}

let numArray = getArray([1, 2, 3, 4, 5])
let stringArray = getArray(["ariz", "hasya", "pratama"])

numArray.push('mushi')

console.log(numArray)

// Generic Custom
const getArray2 = <T>(items: T[]): T[] => {
    return new Array().concat(items)
}

let numArray2 = getArray2<number>([1, 2, 3, 4, 5])
let stringArray2 = getArray2<string>(["ariz", "hasya", "pratama"])

stringArray2.push('mushibuah')

console.log(stringArray2)