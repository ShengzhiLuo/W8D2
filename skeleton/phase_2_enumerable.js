Array.prototype.myEach = function (func) {
    for (i = 0; i < this.length; i++){
        func(this[i]);
    }
}

const arr = [1, 3, 4, 5]
// func = function (a) {
//     console.log(a);
// };
// arr.myEach(func);

arr.myEach((a) => {console.log(a);});

Array.prototype.myHash = function (func) {
    let newArray = []
    this.myEach((a) => { newArray.push(func(a)) })
    return newArray
}

console.log(arr.myHash(a => a * a))

Array.prototype.myReduce = function (func, i) {
    let array = this;
    if (i === undefined) {
        i = array[0];
        array = array.slice(1);
    }
       let result = i;

    array.myEach(ele => result = func(result, ele))

    return result;
};

console.log(arr.myReduce((total, i) => total + i, 8))

