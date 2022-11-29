function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++){
    for (let j = i + 1; j < array.length; j++){
      if (array[i] + array[j] === target){
        return true
      }
      }
    }
    return false
  }


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Need to loop through the array, on each loop, need to take the current number of the loop and add the rest of the numbers to it individually, to see if reachs the target number, if it does equal the number, return true
*/

/*
  Add written explanation of your solution here
  I started with looping through the array once, and giving that assigning that number the variable i, I then loop through the array again starting at i + 1 and then assign that to j,
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
