type Employees ={
    id : number
    name : string
    age : number

}


const students: Employees = {
    id: 2,
    name: 'ola',
    age: 10
}


//// Moving to Union types

function kgToLbs(weight: number | string) {
    if(typeof weight === 'number')
        return weight * 0.453592
    else return parseInt(weight) * 2
}

kgToLbs('10')