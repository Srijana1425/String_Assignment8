let  s = "3[a]2[bc]"
let startIndex = 0;
var decodeString = function(s) {
    startIndex = 0;
    return solve(s, s.length);
};

const solve = (s, n) => {
    
    //base case
    if(startIndex >= n) return '';
    
    let ans = ''
    while(startIndex < n) {
        let num = parseInt(s[startIndex]);
        
        if(num) {
            
            /* It will fetch the number from [1, 300] */
            let origNum = getNum(s, num);
            
            /* Incremented by 1 to skip [ bracket */
            startIndex += 1;
            
            /* Calling recursion to solve the subproblem */
            let getAns = solve(s, n);
            
            /* To coppy the output given number times */
            while(origNum != 0) {
                ans += getAns;
                origNum--;
            }
        }
        else {
            if(s[startIndex] == ']') {
                startIndex += 1;
                return ans;
            }
            else {
                ans += s[startIndex++];
            }
        }
    }
    
    return ans;
}

const getNum = (s, num) => {
    let sIndex = startIndex;
    
    while(!isNaN(num)) {
        startIndex += 1;
        num = parseInt(s[startIndex]);
    }
    
    return parseInt(s.substr(sIndex, startIndex));
}
console.log(decodeString(s))