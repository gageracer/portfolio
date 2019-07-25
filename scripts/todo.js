function add(str){
    var me = document.getElementById("todo-add").value;
    if(me == "")
        return
    var todo = getToDo(str);
    todo.push(me);
    var he = document.getElementById("todo-list");
    // console.log(str);
    let i = todo.length;
    console.log(i);
    // if(todo.length < 1) {
    //     for( let i = 0; todo.length > i ; i++)
    //     {
    //         var you = document.createElement("li");
    //         you.innerText = todo[i];
    //         he.appendChild(you);
    //     }
    // }
    // else{
    var you = document.createElement("li");
    you.className = "todoli";
    you.innerHTML = me + '<button class="remove-button" id="td' + i + '"onclick="remove(this.id)">X</button>';
    he.appendChild(you);
    // }
    localStorage.setItem("todo",JSON.stringify(todo));

    //Change the input text empty after adding an element
    document.getElementById("todo-add").value = "";
}

function getToDo(str){
    // console.log("inside getTODO: "+ str);
    if( localStorage.getItem(str) ){return JSON.parse(localStorage.getItem(str));}
    else{ return new Array;}
}

function remove(my_id){
    // alert(my_id);
    //Removing from localstore
    var todo = getToDo("todo");
    let li = document.getElementById(my_id).parentNode;
    // let index =  my_id.split("td")[1];
    let index =  todo.indexOf(li.innerText);
    console.log(index + " index is");
    todo.splice(index,1);
    localStorage.setItem("todo",JSON.stringify(todo));
    
    //removing from DOM
    console.log(li);
    li.parentNode.removeChild(li);
}