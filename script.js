
let item = document.getElementById('inpt');
let result = document.getElementById("item");
let taskArray=localStorage.getItem("items")? JSON.parse(localStorage.getItem("item")):[];

function addValue(data) {
    
    var ele = document.createElement("li");
    var text = document.createTextNode(data);
    ele.appendChild(text);
    result.appendChild(ele);
    taskArray.push(data);
    item.value = "";
}

function addItem() {
    
    addValue(item.value);
    localStorage.setItem("items", JSON.stringify("taskArray"));
    console.log(taskArray);

}

