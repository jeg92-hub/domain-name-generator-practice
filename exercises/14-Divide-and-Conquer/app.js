let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList(numbers){
    var odd = [];
    var even = [];
    for(var i=0;i<numbers.length;i++){
        if(numbers[i]%2==0){
            odd.push(numbers[i]);
        }else{
            even.push(numbers[i]);
        }
    }
    return even.concat(odd);
}

console.log(mergeTwoList(list_of_numbers))
