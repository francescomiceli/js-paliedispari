console.log('JS OK!!!')

// chiedi all'utemte
let word = prompt('Scrivi una parola..');

// 'è palindroma'?
let palindromeYes = check(word);

console.log('Palindroma vero o falso?: ', palindromeYes);

// true or false?
function check(text) {
    console.log(text);

    let textPalindroma = '';

    // cicla
    for (let i = 0; i < text.length; i++) {
        const userWord = text.charAt(i);
        textPalindroma = userWord + textPalindroma;
    }
    console.log(textPalindroma);

    let sameWord = textPalindroma === text;

    return sameWord;
}