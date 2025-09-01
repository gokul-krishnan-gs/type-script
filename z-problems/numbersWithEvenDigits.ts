//Given an array nums of integers, return how many of them contain an even number of digits.

function findNumbers(nums: number[]): number {
    let count: number = 0;
    for(let i:number = 0;i<nums.length;i++){
        if((nums[i].toString().length) % 2 === 0)
            count++;
    };
    return count;
};
