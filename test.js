var findKthLargest = function(nums, k) {
    k = nums.length - k;
    return quickSelect(k, nums, 0, nums.length-1);
};

const quickSelect = (k, nums, left, right) => {
    let pivot = nums[right], p = left;
    for(let i=left; i<right; i++){
        if(nums[i]<=pivot){
            [nums[i], nums[p]] = [nums[p], nums[i]];
            p += 1;
        }
    }
    [nums[p], nums[right]] = [nums[right], nums[p]];
    console.log(nums)
    if(p<k){
        return quickSelect(k, nums, p+1, right);
    }else if(p>k){
        return quickSelect(k, nums, left, p-1);
    }else{
        return nums[p];
    }
}
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))