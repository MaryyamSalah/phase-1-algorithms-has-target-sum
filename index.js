function hasTargetSum(array, target) {
  // Write your algorithm here
const targetarray = []
  for (let i =0 ; i<array.length ; i++){
    const currentArray = array[i]

    if (targetarray.includes(target-currentArray)){
      return true
    }
    targetarray.push(currentArray)
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  -create empty array for the new array
  -for loop for iterate each element of array
  -return current array
  -if target minus current array includes array retuen true
  -push current array if not includes the target return false
*/

/*
  Add written explanation of your solution here
  creating new array for setting the new elements , then returning the current value ,setting if statement 
  if the target minus current element includes the new array return true otherwise return false 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
