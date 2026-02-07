

function deleteKElements(arr,k){
    let left=0,maxLen=0,zeros=0;
    for(let right=0;right<arr.length;right++){
        if(arr[right]===0) zeros++;

        while(zeros>k){
            if(arr[left]===0){
                zeros--;
            }
            left++;
        }
        maxLen=Math.max(maxLen,(right-left+1)-zeros);
    }
    if(maxLen===arr.length){
        return maxLen-1;
    }
    return maxLen;
}

console.log(deleteKElements([1,1,1,0,0,1],2))