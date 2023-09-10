var longestConsecutive = function(nums) {
    if(!nums.length) {
      return 0;
    }
    let max = 1;
    let pre = 1;
    nums.sort((a, b) => a - b);
    console.log(nums)
    for(let i = 1; i < nums.length; i++) {
      if(nums[i] - nums[i - 1] === 1) {
        pre++;
      }else if(nums[i] - nums[i - 1] === 0) {
        
      } else {
        pre = 1;
      }
      if(pre > max) {
        max = pre;
      }
    }
  
    return max;
  };

  console.log(longestConsecutive([100,4,200,1,3,2]))
  console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
  console.log(longestConsecutive([0,1,0]))
  console.log(longestConsecutive([1,2,0,1]))