const runningSumOf1D(nums: number[]): number[] {
  let sum: number = 0;            // Initialize sum
  let runningSum: number[] = [];  // Array to store running sums

  for(let i: number = 0; i < nums.length; i++){
    sum += nums[i];               // Add current element to sum
    runningSum.push(sum);         // Push the updated sum into the array
  }

  return runningSum;              // Return the final array
};

//Example
//console.log(runningSumOf1D([1,2,3,4]));
// Output: [1, 3, 6, 10]
