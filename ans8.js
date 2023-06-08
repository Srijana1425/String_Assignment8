let  s = "ab", goal = "ba"
var buddyStrings = function(s, goal) {
    let first =-1;
    let second = -1;
    if(s===goal){
        for(let i=0; i<s.length; i++){
            if(s.substring(i+1).indexOf(s[i])!=-1) return true
        }
        return false;
    }
    for(let i = 0; i<s.length; i++){
        if(s[i] != goal[i]){
            if(first == -1){
                first = i;
            } else {
                //if(second !=-1) return false;
                second = i;
            }
        }
    }
    if(first !=-1 && second !=-1){
        return goal === s.substring(0, first) + s.substring(second, second+1) + s.substring(first+1, second)+
        s.substring(first, first+1)+s.substring(second+1);
    }
    return false;
 };
 console.log(buddyStrings (s, goal))