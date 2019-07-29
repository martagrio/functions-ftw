'use strict';

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}


function writeThis(word, number) {
    for (let i = 0; i < number; i++) {
        console.log(word);
    }

}

writeThis('patata', getRandomNumber(11));
writeThis('aguacate', getRandomNumber(11));
writeThis('Pizza', getRandomNumber(11));