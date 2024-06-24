

// Write a function called ***separatePositive*** which accepts an array of non-zero integers. Separate the positive integers to the left and the negative integers to the right. The positive numbers and negative numbers need not be in sorted order. The problem should be done in place (in other words, do not build a copy of the input array).

// Examples:

// ```jsx
// separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
// separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
// separatePositive([-5, 5]) // [5, -5]
// separatePositive([1, 2, 3]) // [1, 2, 3]
// ```

// **Constraints**

// Time Complexity: O(N)


function separatePositive(arr) {
    let left = 0; //use the pointer method to move the numbers within arr
    let right = arr.length - 1;  //using the indices to move the data around in arr (remember length includes 0)

    while (left < right){
        //assign the indice pointers numbers to pull that value from the array
        if (arr[left] > 0){
            left++; //then change left to 1 and so on
        }
        else if (arr[right] < 0) {
            right--;
        } else {
            // Detailed swap method
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
      
            left++;
            right--;
          }
    }
    return arr;
}
