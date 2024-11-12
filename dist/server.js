"use strict";
const students = {
    id: 2,
    name: 'ola',
    age: 10
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 0.453592;
    else
        return parseInt(weight) * 2;
}
kgToLbs('10');
//# sourceMappingURL=server.js.map