// add whatever parameters you deem necessary

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
// Constraints:
// Time Complexity: O(N)
// Examples:
// averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false

function averagePair(arrInt, avg) {
    let left = 0;
    let right = arrInt.length - 1;

    while (left < right) {//loop keeps running comparing each value
        let currentAvg = (arrInt[left] + arrInt[right])/ 2;

        if (currentAvg === avg){
            return true;
        }
        else if (currentAvg < avg) {
            left ++;
        }
        else {
            right--;
        }
    }
     return false;
}
