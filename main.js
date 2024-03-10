function inRange(num, min, max) {
    return num <= max && num >= min
}

/*

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

*/


let background = localStorage.getItem("background") ? JSON.parse(localStorage.getItem("background")) : '#FFFFFF'; // white
let text = localStorage.getItem("text") ? JSON.parse(localStorage.getItem("text")) : '#000000'; // black
let primary = localStorage.getItem("primary") ? JSON.parse(localStorage.getItem("primary")) : '#FFFFFF'; // white
let secondary = localStorage.getItem("secondary") ? JSON.parse(localStorage.getItem("secondary")) : '#C8C8C8'; // light gray
let accent = localStorage.getItem("accent") ? JSON.parse(localStorage.getItem("accent")) : '#646464'; // dark gray


const root = document.documentElement

root.style.setProperty('--background', background);
root.style.setProperty('--text', text);
root.style.setProperty('--primary', primary);
root.style.setProperty('--secondary', secondary);
root.style.setProperty('--accent', accent);

const backgroundPicker = document.getElementById('background-color-picker');
const textPicker = document.getElementById('text-color-picker');
const primaryPicker = document.getElementById('primary-color-picker');
const secondaryPicker = document.getElementById('secondary-color-picker');
const accentPicker = document.getElementById('accent-color-picker');

backgroundPicker.value = background;
textPicker.value = text;
primaryPicker.value = primary;
secondaryPicker.value = secondary;
accentPicker.value = accent;

backgroundPicker.addEventListener('input', function () {
    root.style.setProperty('--background', backgroundPicker.value);
    localStorage.setItem("background", JSON.stringify(backgroundPicker.value));
});

textPicker.addEventListener('input', function () {
    root.style.setProperty('--text', textPicker.value);
    localStorage.setItem("text", JSON.stringify(textPicker.value));
});

primaryPicker.addEventListener('input', function () {
    root.style.setProperty('--primary', primaryPicker.value);
    localStorage.setItem("primary", JSON.stringify(primaryPicker.value));
});

secondaryPicker.addEventListener('input', function () {
    root.style.setProperty('--secondary', secondaryPicker.value);
    localStorage.setItem("secondary", JSON.stringify(secondaryPicker.value));
});

accentPicker.addEventListener('input', function () {
    root.style.setProperty('--accent', accentPicker.value);
    localStorage.setItem("accent", JSON.stringify(accentPicker.value));
});