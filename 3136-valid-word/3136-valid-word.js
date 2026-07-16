/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {

    if (word.length < 3) return false;

    let Vowel = false;
    let Consonant = false;

    for (let ch of word) {

        if (ch >= '0' && ch <= '9') {
            continue;
        }
        if (
            (ch >= 'a' && ch <= 'z') ||
            (ch >= 'A' && ch <= 'Z')
        ) {
            let c = ch.toLowerCase();

            if ("aeiou".includes(c)) {
            Vowel = true;
            } else {
                Consonant = true;
            }
        }
        else {
            return false;
        }
    }

    return Vowel && Consonant;
};