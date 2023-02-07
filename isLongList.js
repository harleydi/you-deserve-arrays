const prompt = require('prompt-sync')({sigint: true})

let arr = prompt('Create an array: ')

let finalArr = JSON.parse(`[${arr}]`)

if (finalArr.length >= 10) {
    console.log('true')
} else {
    console.log('false')
}