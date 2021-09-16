function lyricsGenerator(arr){
    var threeTimesInArow = 0;
    var res = []
    for(var i=0;i<arr.length;i++){
        if(arr[i] === 1){
            threeTimesInArow++;
            if(threeTimesInArow===3){
                res.push('Drop the base');
                res.push('!!!Break the base!!!')
                threeTimesInArow = 0;
            }else{
                res.push('Drop the base');
            }
        }else{
            threeTimesInArow = 0;
            res.push('Boom');
        }
    }

    return res.join(" ");
}
// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]).trim())
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]).trim())
console.log(lyricsGenerator([0,0,0]).trim())
console.log(lyricsGenerator([1,0,1]).trim())
console.log(lyricsGenerator([1,1,1]).trim())