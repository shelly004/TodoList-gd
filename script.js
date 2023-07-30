
let item = document.getElementById('inpt');
let result = document.getElementById("item");

function loadText(){
    
}

function addItem() {
    // if (item.length() > 0) {
    console.log(item.value);    
    var ele = document.createElement("li");
        
        var text = document.createTextNode(item.value);
        ele.appendChild(text);
        result.appendChild(ele);
        localStorage.setItem('text', JSON.stringify(text));
        item.value="";
        loadText();
    // }
}


