let createTable = function() {
    let table = document.createElement("table");

    let row1 = document.createElement("TR");
    let row2 = document.createElement("TR");
    let row3 = document.createElement("TR");


    let data1 = document.createElement("TD");
    let data2 = document.createElement("TD");
    let data3 = document.createElement("TD");
    let data4 = document.createElement("TD");
    let data5 = document.createElement("TD");
    let data6 = document.createElement("TD");
    let data7 = document.createElement("TD");
    let data8 = document.createElement("TD");
    let data9 = document.createElement("TD");

    data1.innerText = "X";
    data2.innerText = "O";
    data3.innerText = "X";
    data4.innerText = "O";
    data5.innerText = "X";
    data6.innerText = "O";
    data7.innerText = "X";
    data8.innerText = "O";
    data9.innerText = "X";

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