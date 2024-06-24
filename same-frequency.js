// Write a function called ***sameFrequency***. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Examples:

// ```jsx
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false
// ```

// **Constraints**

// Time Complexity - O(N + M)


function sameFrequency(a,b) {
        //make the frequency counters for both numbers

        //create the objects
        const freqA = {};
        const freqB = {};

        const numberStringA = a.toString();
        for (let char of numberStringA) {
            freqA[char] = 
                        (freqA[char] || 0) + 1;
          }
          const numberStringB = b.toString();
          for (let char of numberStringB) {
            freqB[char] = (freqB[char] || 0) + 1;
          }

          if (numberStringA.length !== numberStringB.length) {
            return false;
        }
        //WONT WORK- NEED TO ADDRESS THE VALUE
        //   for(let key in freqA){
        //     if (!(key in freqB)){
        //         return false;
        //     }
        //   }
        for (let key in freqA) {
            if (freqA[key] !== freqB[key])
                return false;
        }
        return true;
}
