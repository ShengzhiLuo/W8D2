Array.prototype.bubbleSort = function () {
    let sorted = false;
    for (i = 0; sorted === false; i++) {
        sorted = true;
        
        for (j = 0; j < this.length - 1; j++) {
            if (this[j] > this[j+1]) {
                [this[j],this[j+1]] = [this[j+1],this[j]];
                sorted = false;
            }
        }
    }
    return this;
}

const arr = [7, 3, 2, 1, 0]

console.log(arr.bubbleSort())



Array.prototype.subString = function () {
    let array = [];
    for (i = 0; i < this.length; i++){
        for (j = 1; j > i; j++){
            array.push(this[i...j])
        }
    }           
}