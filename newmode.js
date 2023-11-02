function doSomething(){
    console.log("******doSomething called from newnode.js*********")

}
function againSomething(){
    console.log("******doSomething called from newnode.js*********")

}
//CRUD - create,read,update,delete
let arr = [];
function create(element){
    arr.push(element);
    return arr;
}

function read(){
    return arr;
}

function update(index, element){
    arr[index] = element;
    return arr;
}

function deletefun(index){
    arr.splice(index,1);
    //delete one value at given index
    return arr;
}

module.exports = {doSomething,againSomething,create,read,update,deletefun};