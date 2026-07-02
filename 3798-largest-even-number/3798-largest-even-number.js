/**
 * @param {string} s
 * @return {string}
 */
var largestEven = function(s) {
    for (let i=s.length-1;i>=0;i--){
        let digit=Number(s[i]) 
        
        if(digit%2===0){
            return s.substring(0,i+1)
        }
        
        
          }
          return ""
          
};