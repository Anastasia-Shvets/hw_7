const quantityWords = 50;
const minLetters = 3;
const maxLetters = 11;
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

let result = {};

for (let i = 0; i < quantityWords; i++) {
    let word = '';
    let length = Math.floor(Math.random() * (maxLetters - minLetters) + minLetters);
    for (let j = 0; j < length; j++) {
        let symbol = Math.floor(Math.random() * (alphabet.length - 1))
        word =+ alphabet.symbol;
    }

    if (result[length]) {
        result[length].push(word);
    } else {
        result[length] = [];
        result[length].push(word);
    }
}

for (var key in result) {
    console.log('You have ' + result[key].length + ' words with ' + key + ' characters');
}