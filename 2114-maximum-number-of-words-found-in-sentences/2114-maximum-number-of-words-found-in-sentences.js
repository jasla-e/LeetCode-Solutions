/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max=0;

    for (let speak of sentences){
         let words=speak.split(" ").length;

         if (words>max){
            max=words
         }
       
    }
      return max;
};