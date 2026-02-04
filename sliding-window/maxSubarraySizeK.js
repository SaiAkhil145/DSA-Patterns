// fixed size window maximum sum subarray with size k

// core idea : 
// first i will the sum of the 0 to k elements and make it as maxSum after that i will iterate from k to n-1 and add arr[i] to sum and subtract arr[i-k] and will check the maximum between them


function maxSubarraySum(arr,k){
    let sum=0,maxSum=0
    for(let i=0;i<k;i++){
        sum+=arr[i];
    }
    maxSum=sum;
    for(let i=k;i<arr.length;i++){
        sum+=arr[i];
        sum-=arr[i-k];
        maxSum=Math.max(sum,maxSum);
    }
    return maxSum;
}