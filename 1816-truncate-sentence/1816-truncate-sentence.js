/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let result = s.split(" ");
    let ans = "";

    for (let i = 0; i < k; i++) {
        ans += result[i] + " ";
    }

    return ans.trim();
};