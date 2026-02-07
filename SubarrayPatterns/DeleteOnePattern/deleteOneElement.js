

// return the longest subarray after deleting one element.

// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

 

// Example 1:

// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.



function longestSubarrayAfterOneDeletion(arr){
    let left=0,maxLen=0,zeros=0;
    for(let right=0;right<arr.length;right++){
        if(arr[right]===0) zeros++;

        while(zeros>1){
            if(arr[left]===0){
                zeros--;
            }
            left++;
        }
        maxLen = Math.max(maxLen,(right-left+1)-zeros);
    }
    if(maxLen===arr.length){
        return maxLen-1;
    }
    return maxLen
}

console.log(longestSubarrayAfterOneDeletion([1,1,0,1]));