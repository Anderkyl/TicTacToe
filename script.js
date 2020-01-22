let createTable = function(){
    let table= document.createElement("table");

    let row1 = document.createElement("TR");
    let row2 = document.createElement("TR");
    let row3 =  document.createElement("TR");
    let row4 = document.createElement("TR");
    let row5 = document.createElement("TR");
    let row6 = document.createElement("TR");
    let row7 = document.createElement("TR");
    let row8 = document.createElement("TR");
    let row9 = document.createElement("TR");
    let row10 = document.createElement("TR");
    let row11 = document.createElement("TR");
    let row12 = document.createElement("TR");

    let data1 = document.createElement("TD");
    let data2 = document.createElement("TD");
    let data3 = document.createElement("TD");
    let data4 = document.createElement("TD");
    let data5 = document.createElement("TD");
    let data6 = document.createElement("TD");
    let data7 = document.createElement("TD");
    let data8 = document.createElement("TD");
    let data9 = document.createElement("TD");
    let data10 = document.createElement("TD");
    let data11 = document.createElement("TD");
    let data12 = document.createElement("TD");

        data1.innerText = "X";
        data2.innerText = "O";
        data3.innerText = "X";
        data4.innerText = "O";
        data5.innerText = "X";
        data6.innerText = "O";
        data7.innerText = "X";
        data8.innerText = "O";
        data9.innerText = "X";
        data10.innerText = "O";
        data11.innerText = "X";
        data12.innerText = "O";

    row1.appendChild(data1);
    row2.appendChild(data2);
    row3.appendChild(data3);
    row4.appendChild(data4);
    row5.appendChild(data5);
    row6.appendChild(data6);
    row7.appendChild(data7);
    row8.appendChild(data8);
    row9.appendChild(data9);
    row10.appendChild(data10);
    row11.appendChild(data11);
    row12.appendChild(data12);

    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);
    table.appendChild(row4);
    table.appendChild(row5);
    table.appendChild(row6);
    table.appendChild(row7);
    table.appendChild(row8);
    table.appendChild(row9);
    table.appendChild(row10);
    table.appendChild(row11);
    table.appendChild(row12);



    let content = document.getElementById("content");
    content.appendChild(table);


;}