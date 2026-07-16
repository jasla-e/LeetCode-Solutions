/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {

    if (word.length < 3) return false;

    let hasVowel = false;
    let hasConsonant = false;

    for (let ch of word) {

        // Digit
        if (ch >= '0' && ch <= '9') {
            continue;
        }

        // Letter
        if (
            (ch >= 'a' && ch <= 'z') ||
            (ch >= 'A' && ch <= 'Z')
        ) {
            let c = ch.toLowerCase();

            if ("aeiou".includes(c)) {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
        }
        // Invalid character
        else {
            return false;
        }
    }

    return hasVowel && hasConsonant;
};