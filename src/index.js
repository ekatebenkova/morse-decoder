const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = [];

    for (let i = 0; i < expr.length; i += 10) {
        let encodedWord = [];
        let morseCode = [];
        if (expr[i] === '*') {
            result.push(' ');
            continue;
        }
        
        for (let a = i; a < i + 10; a++) {
            encodedWord.push(expr[a]);
        }

        for (let b = 0; b < 10; b += 2) {
            if (encodedWord[b] === '1' && encodedWord[b + 1] === '0'){
                morseCode.push('.');
            }
            if (encodedWord[b] === '1' && encodedWord[b + 1] === '1'){
                morseCode.push('-');
            }
        }

        for (let [code, letter] of Object.entries(MORSE_TABLE)) {
            if (code === morseCode.join('')) {
                result.push(letter);
                break;
            }
        }
    }
    return result.join('');

}

module.exports = {
    decode
}