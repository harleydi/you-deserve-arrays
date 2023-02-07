const prompt = require('prompt-sync')({sigint: true})

let arr = JSON.parse(prompt('Create an array: '))
console.log(arr[arr.length - 1])