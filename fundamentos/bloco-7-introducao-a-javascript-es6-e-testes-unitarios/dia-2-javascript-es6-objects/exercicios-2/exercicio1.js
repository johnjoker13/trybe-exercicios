let arr = [ 1,2,3,4,5];

function getEvenNumbers(array) {
    let newArray = array.filter(x => x%2==0);
    return newArray;
}

console.log(getEvenNumbers(arr));