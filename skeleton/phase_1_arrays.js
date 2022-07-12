Array.prototype.unique = function () {
    let new_array = [];
    for (i = 0; i < this.length; i++) {
        if (!new_array.includes(this[i])) {
            new_array.push(this[i]);
        };
    };
    return new_array;
    
};

console.log([1,2,2,3,3,3].unique());

Array.prototype.twoSum = function(target) {
    let new_array = [];
    for (i = 0; i < this.length - 1; i++) {
        for (j = 1; j < this.length; j++) {
            if (this[i] + this[j] === target) {
                new_array.push([i,j])
            }
        }
    }
    return new_array
}

console.log([1,-1, 3, 2,-2].twoSum(0))

Array.prototype.transpose = function () {
    let new_array = [];
    for (i = 0; i < this[0].length; i++) {

        new_array.push([])
    }
    // debugger;
    for (i = 0; i < this[0].length ; i++){
        for (j = 0; j < this.length; j++){
            // debugger;
            new_array[i].push(this[j][i])
        }
    }
    return new_array
}

console.log([['a','b'],['c','d'],['e','f']].transpose())



// Array.prototype.transpose = function () {
//         let new_array = [];
//     for (i = 0; i < this[0].length; i++) {
//             let inner_array = [];
//         for (j = 0; j < this.length; j++) {
//             inner_array.push(this[j][i])
//         } 
//         new_array.push(inner_array)
//     }
//     return new_array
// }

// console.log([['a', 'b'], ['c', 'd'], ['e', 'f']].transpose())