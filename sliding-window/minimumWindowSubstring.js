
// // Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.


function minimumWindowSubstring(s,t){
    let need = new Map();
    let map = new Map();
    let valid =0;
    let right=0,left=0;

    for(let i=0;i<t.length;i++){
        let count= (map.get(t[i]) || 0)+1;
        need.set(t[i],count);
    }
    while(right<s.length){
        let count=(map.get(s[right]) || 0)+1;
        if(map.has(s[right]) && need.has(s[right])){
            valid++;
        }
    }

}

console.log(minimumWindowSubstring('sadsada','aabb'))