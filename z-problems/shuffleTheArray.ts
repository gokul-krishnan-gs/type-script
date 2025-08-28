function shuffle(nums: number[], n: number): number[] {
    let result: number[] = [];
    let i: number = 0;
    for(i=0;i<n;i++){
        result.push(nums[i]);
        result.push(nums[i+n]);
    };
    return result;
};

//console.log(shuffle([2,5,1,3,4,7], 3));
// [2,3,5,4,1,7]
