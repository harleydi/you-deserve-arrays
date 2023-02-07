const prompt = require('prompt-sync')({sigint: true})

let arr = prompt('Create an array of words: ')

let finalArr = JSON.parse(`[${arr}]`)

if (finalArr.length - 1 >= 2) {
    console.log(finalArr[2][1])
} else {
    console.log('Error not enough words to complete')
}