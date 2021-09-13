var people = ['juan','ana','michelle','daniella','stefany','lucy','barak','emilio'];

//your code below
function deletePerson(name){
    return people.filter(element => element!==name);
}
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
