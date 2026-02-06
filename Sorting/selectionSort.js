
// selection sort 

// find the smallest element index and iterate it withe starting index


function selectionSort(arr){
    let n = arr.length;
    for(let i=0;i<n-1;i++){
        let minIndex = i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        if(minIndex!==i){
            let temp = arr[i];
            arr[i]=arr[minIndex];
            arr[minIndex]=temp;
        }
    }
    return arr;
}

console.log(selectionSort([6,5,4,3,2,1]))