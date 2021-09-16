let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
let res = theBools.map(function(val){
    if(val==0){
        return 'woko';
    }else{
        return 'wiki';
    }
});

console.log(res)