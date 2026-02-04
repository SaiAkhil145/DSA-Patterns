// longest substring without repeating characters


function longestSubstring(str){
    let map = new Map();
    let maxLen=0;
    let left=0,right=0;
    while(right<str.length){
        

        if(map.has(str[right]) && map.get(str[right])>=left){
            left = map.get(str[right])+1;
        }
        map.set(str[right],right);
        maxLen = Math.max(maxLen,right-left+1);
        right++;
    }
    return maxLen;
}
console.log(longestSubstring('abcdefghij'));