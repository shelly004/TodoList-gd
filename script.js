let fieldinpt = document.getElementById('inpt');
let result = document.getElementById("item-list");
let taskArray1 = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

taskArray1.forEach(item => {
    var ele = document.createElement('li');
    var text = document.createTextNode(item);
    ele.appendChild(text);
    result.appendChild(ele);

});



function addValue(data) {

    var ele = document.createElement("li");
    var text = document.createTextNode(data);
    text+=`<button onclick="handleButtonClick(1)">Click me!</button>`;
    ele.appendChild(text);

    result.appendChild(ele);
    let taskArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
    taskArray.push(data);
    taskArray1 = taskArray
    localStorage.setItem("items", JSON.stringify(taskArray));
    fieldinpt.innerHTML = '';
    

}

function addItem() {

    addValue(fieldinpt.value);
    console.log(taskArray1);

}


function sortList() {
    let list = document.getElementById("item-list");
    let Arrayitems = list.getElementsByTagName("li");
    let sortedItems = Array.from(Arrayitems).sort((a, b) => a.innerText.localeCompare(b.innerText));

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    for (let item of sortedItems) {
        list.appendChild(item);
    }
}
