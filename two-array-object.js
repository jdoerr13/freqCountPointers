// add whatever parameters you deem necessary
// //Write a function called twoArrayObject which accepts two arrays of varying lengths.The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.
// Examples:
// twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
// twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
// twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}

//will we use index because it is orders
function twoArrayObject(arrKeys, arrValues) {
    const result = {};

    //need to use index here bc the arrays are ordered
    //standard loop with i < length of keys ++
    for (let i=0; i< arrKeys.length; i++) {
        if (i < arrValues.length) {//checks if there is a corresponding value 
          result[arrKeys[i]] = arrValues[i]; //result[arrKeys[i]] accesses the property of the result object using the evaluated key. If the property does not exist, it will be created.
        } else {
            result[arrKeys[i]] = null;
        }
    }
    return result;

}
