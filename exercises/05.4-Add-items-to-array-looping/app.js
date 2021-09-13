var arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
//*****************

function addRandomIntegers(arr,num){
    if(num>0){
        for(var i=num;i>0;i--){
            arr.push(Math.floor((Math.random() * 10) + 1))
        }
    }
    return arr;
}

console.log(addRandomIntegers(arr,10))