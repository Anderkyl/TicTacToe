let toggleLet = true;

let createTable = function() {
    let table = document.createElement("table");

    let row1 = document.createElement("TR");

    let row2 = document.createElement("TR");

    let row3 = document.createElement("TR");


    let data1 = document.createElement("TD");
    data1.onmouseover = function(){showHover(this)};
    data1.onmouseout = function(){hoverOut(this)};
    data1.onclick = function(){toggle(this)};
    let data2 = document.createElement("TD");
    data2.onmouseover = function(){showHover(this)};
    data2.onmouseout = function(){hoverOut(this)};
    data2.onclick = function(){toggle(this)};
    let data3 = document.createElement("TD");
    data3.onmouseover = function(){showHover(this)};
    data3.onmouseout = function(){hoverOut(this)};
    data3.onclick = function(){toggle(this)};
    let data4 = document.createElement("TD");
    data4.onmouseover = function(){showHover(this)};
    data4.onmouseout = function(){hoverOut(this)};
    data4.onclick = function(){toggle(this)};
    let data5 = document.createElement("TD");
    data5.onmouseover = function(){showHover(this)};
    data5.onmouseout = function(){hoverOut(this)};
    data5.onclick = function(){toggle(this)};
    let data6 = document.createElement("TD");
    data6.onmouseover = function(){showHover(this)};
    data6.onmouseout = function(){hoverOut(this)};
    data6.onclick = function(){toggle(this)};
    let data7 = document.createElement("TD");
    data7.onmouseover = function(){showHover(this)};
    data7.onmouseout = function(){hoverOut(this)};
    data7.onclick = function(){toggle(this)};
    let data8 = document.createElement("TD");
    data8.onmouseover = function(){showHover(this)};
    data8.onmouseout = function(){hoverOut(this)};
    data8.onclick = function(){toggle(this)};
    let data9 = document.createElement("TD");
    data9.onmouseover = function(){showHover(this)};
    data9.onmouseout = function(){hoverOut(this)};
    data9.onclick = function(){toggle(this)};

    data1.innerText = "";
    data2.innerText = "";
    data3.innerText = "";
    data4.innerText = "";
    data5.innerText = "";
    data6.innerText = "";
    data7.innerText = "";
    data8.innerText = "";
    data9.innerText = "";

    row1.appendChild(data1);
    row1.appendChild(data2);
    row1.appendChild(data3);

    row2.appendChild(data4);
    row2.appendChild(data5);
    row2.appendChild(data6);

    row3.appendChild(data7);
    row3.appendChild(data8);
    row3.appendChild(data9);


    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);


    let content = document.getElementById("content");
    content.appendChild(table);


};



let showHover = function(id){
    id.innerText = "X";
    id.style.backgroundColor = "purple";

};

let hoverOut = function(id){
    id.style.backgroundColor = "black";
    id.innerText = "";


};

let toggle =  function(id){
    if(toggleLet === true){
        id.innerText = "X";
        id.style.backgroundColor = "purple";
        id.onmouseout = "";
        id.onmouseover = "";
        toggleLet = false;
    }else{
        id.innerText = "O";
        id.onmouseout = "";
        id.onmouseover = "";
        toggleLet = true;
        id.backgroundColor = "purple";
    }
};