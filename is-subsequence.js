// Write a function called ***isSubsequence*** which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// ```jsx
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// ```

// Constraints:

// Time Complexity - O(N + M)

// function isSubsequence(str1, str2) {
//     const freq1 = {};
//     const freq2 = {};
  
//     for (let char of str1) {
//       freq1[char] = (freq1[char] || 0) + 1;
//     }
  
//     for (let char of str2) {
//       freq2[char] = (freq2[char] || 0) + 1;
//     }
  
//     // Method 1: Explicit if Conditions
//     for (let char of str1) {
//       if (!(char in freq2)) {
//         return false; // Character not found in str2
//       }
//       if (freq2[char] < freq1[char]) {
//         return false; // Not enough occurrences of the character in str2
//       }
//     }
  
//     // Check the order of characters
//     let index = 0;
//     for (let char of str2) {
//       if (char === str1[index]) {
//         index++;
//       }
//       if (index === str1.length) {
//         return true;
//       }
//     }
  
//     return false;
//   }
    
//FOUND OUT THAT THIS IS a better approach since a two-pointer approach can be used to traverse both stings and check the order of charagers:
function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
  
    while (j < str2.length) {
      if (str1[i] === str2[j]) {
        i++;
      }
      if (i === str1.length) {
        return true;
      }
      j++;
    }
  
    return false;
  }