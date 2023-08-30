/**
 * 
 * @param {Array} arr The list of elements
 * @param {number} t Target to find
 * @returns {boolean} 
 */
function contains(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return true;
    }
  }

  return false;
}

const arr = [5, 7, -2, 8, 3, 1, 0];

console.log(contains(arr, 8)); // true
console.log(contains(arr, 4)); // false
