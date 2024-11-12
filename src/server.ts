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

// type intersection for variable to have two types
type Draggable={
    drag: ()=> void,
}
type Resizable={
    resize: ()=> void,
}
type UIwidgets = Draggable & Resizable;

let person: UIwidgets ={
    drag: ()=> console.log('dragging'),
    resize: ()=> console.log('resizing'),
}

/// Moving to literal types
type quantity = 50 | 100
let measurement: quantity = 100