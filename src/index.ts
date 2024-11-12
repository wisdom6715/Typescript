let age: number = 21
if (age > 20){
    age += 10;
}
    
// console.log(age);

//// types inn typescript
let course = 'typescript';
let sales = 123_243_243
function wisdom(document: any){
    console.log(document);
    
}

let number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 10]
number.forEach(n => n.toExponential)

let user: [number, string] = [1, 'mosh'];
user.push(1);
// Moving to enus
const enum Size {Small=1, Medium, Large}
let mySize: Size = Size.Small
// console.log(mySize);

/// Moving to functions
function calculateIncome(income: number, taxYear: number): number {
    if(taxYear > 50_000)
        return income * 1.1 
    return income*1.3
    
}
calculateIncome(57, 100);

/// Objects in typescript
const employees: {
    id : number
    name: string
} = {id : 1, name : "wisdom"}
console.log(employees.name, employees.id);
const enum Size{ Sm = 1, Me, La}
const yourSize: Size = Size.Sm
