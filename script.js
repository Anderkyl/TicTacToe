let createTable = function() {
    let table = document.createElement("table");

    let row1 = document.createElement("TR");

    let row2 = document.createElement("TR");
    let row3 = document.createElement("TR");


    let data1 = document.createElement("TD");
    data1.onmouseover = function(){showHover(this)};
    let data2 = document.createElement("TD");
    data2.onmouseover = function(){showHover(this)};
    let data3 = document.createElement("TD");
    data3.onmouseover = function(){showHover(this)};
    let data4 = document.createElement("TD");
    data4.onmouseover = function(){showHover(this)};
    let data5 = document.createElement("TD");
    data5.onmouseover = function(){showHover(this)};
    let data6 = document.createElement("TD");
    data6.onmouseover = function(){showHover(this)};
    let data7 = document.createElement("TD");
    data7.onmouseover = function(){showHover(this)};
    let data8 = document.createElement("TD");
    data8.onmouseover = function(){showHover(this)};
    let data9 = document.createElement("TD");
    data9.onmouseover = function(){showHover(this)};

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
    if(id === document.getElementById("TD")){
        id.innerText = "X";
    }else if (id === document.getElementById("TD")){
        id.innerText = "O";
    }


}
