// add whatever parameters you deem necessary
// constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.
// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
// Constraints:
// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:
// Examples:
// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true


function constructNote(msg, letters) {
    //make the frequency counters for both strings

        //create the objects
    const freqCountMsg = {};
    const freqCountLetters = {};

    //make the actual counters to go into the objects
    for (let char of msg) {
        freqCountMsg[char] = //if it doesn't exist in the object the the first option defaults to 0
                    (freqCountMsg[char] || 0) + 1;
    //     //or you could go: 
    // if freqCountMsg[char] {
    //     freqCountMsg += 1;
    //   } else {
    //     freqCountMsg[char] = 1;
      }
      for (let char of letters) {
        freqCountLetters[char] = (freqCountLetters[char] || 0) + 1;
      }

      for(let key in freqCountMsg) {
        // if (freqCountMsg[key] !== freqCountLetters[key]) return false;
        if (!(key in freqCountLetters)) {
            return false;
        }
        if (freqCountLetters[key] < freqCountMsg[key]) {
            return false;
        }
      }
return true
}
