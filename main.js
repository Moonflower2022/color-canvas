/*

Convert a number to a hexadecimal string with:

hexString = yourNumber.toString(16);

And reverse the process with:

yourNumber = parseInt(hexString, 16);

*/


function inRange(num, min, max){
    return num <= max && num >= min
}

function arrayToHexString(arr){
    if (!Array.isArray(arr)){
        throw new Error("InputError: Input is not an array")
    }
    if (arr.length != 3){
        throw new Error("InputError: Input array is not length 3")
    }
    if (!inRange(arr[0], 0, 255) || !inRange(arr[1], 0, 255) || !inRange(arr[2], 0, 255)) {
        throw new Error("InputError: Not all elements in input array are in range [0, 255]")
    }

    r = arr[0].toString(16).length === 1 ? "0" + arr[0].toString(16) : arr[0].toString(16)
    g = arr[1].toString(16).length === 1 ? "0" + arr[1].toString(16) : arr[1].toString(16)
    b = arr[2].toString(16).length === 1 ? "0" + arr[2].toString(16) : arr[2].toString(16)
        
    return "#" + r + g + b
}


let backgroundColor = [1, 2, 3]
let titleColor = [255, 255, 255]

console.log(arrayToHexString(backgroundColor))
console.log(arrayToHexString(titleColor))