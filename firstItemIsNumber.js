const prompt = require('prompt-sync')({sigint: true})

let arr = prompt('Create an array: ')

let finalArr = JSON.parse(`[${arr}]`)

if (typeof finalArr[0] === 'number') {
    console.log(true)
} else {
    console.log(false)
}