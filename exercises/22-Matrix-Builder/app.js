// Code goes here
function matrixBuilder(param){
    var res = [];
    for(let row=0;row<param;row++){
        var line =  [];
        for(let col=0;col<param;col++){
            line.push(Math.floor(Math.random()*2))
        }
        res.push(line);
    }
    return res;
}


// do not change anything from this line down
console.log(matrixBuilder(5))