const a = 10;
const b = 5;
function add(a,b) { //parameter
    //console.log("Add: ",a + b)
    return a+b
}
//call function
const showAdd = add(a,b); //argument
const showAdd2 = add(20,30); //argument
console.log("Add:", showAdd);
console.log("Add:", showAdd2);