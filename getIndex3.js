const prompt = require('prompt-sync')({sigint: true})

let arr = JSON.parse(prompt('Create an array: '))
if (arr[3] === undefined) {
    console.log(arr[arr.length - 1])
} else {
    console.log(arr[3])
}