
let fieldinpt = document.getElementById('inpt');
let result = document.getElementById("item");
let taskArray1 = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

function createItem(data) {
    var ele = document.createElement("li");
    var text = document.createTextNode(data);
    ele.appendChild(text);
    result.appendChild(ele);
}


taskArray1.forEach(item => {
    createItem(item);
});



function addValue(data) {

    createItem(data);

    let taskArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
    taskArray.push(data);
    taskArray1 = taskArray

    localStorage.setItem("items", JSON.stringify(taskArray));

}

function addItem() {

    addValue(fieldinpt.value);
    console.log(taskArray1);

}

