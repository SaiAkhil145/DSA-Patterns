// used when the topic is about subarray,substring,continous element,consecutive element

// there are only two topics fixed size and window size
// pattern find something in window k.


// template :=

// fixed window template
// function fixedWindow(arr,k){
//     let left=0,sum=0,ans=0;
//     for(let right=0;right<arr.length;right++){
//         sum+=arr[i];
//         if(right-left+1===k){
//             ans=Math.max(ans,sum);
//             sum-=arr[left];
//             left++;
//         }
//     }
//     return ans
// }
// console.log(fixedWindow([1,2,3,4,5,6],3));



