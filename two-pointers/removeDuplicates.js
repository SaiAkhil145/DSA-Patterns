// remove duplicates from the sorted array and return the count of unique elements

function removeDuplicates(arr){
    if(arr.length===0) return 0;
    let i=0;
    for(let j=1;j<arr.length;j++){
        if(arr[j]!==arr[i]){
            i++;
            arr[i]=arr[j];
        }
    }
    return i+1;
}

console.log(removeDuplicates([1,1,2,2,3,3]))