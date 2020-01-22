let createTable = function(){
    let table= document.createElement("table");

    let row1 = document.createElement("TR");
    let row2 = document.createElement("TR");
    let row3 =  document.createElement("TR");


    let data1 = document.createElement("TD");
    let data2 = document.createElement("TD");
    let data3 = document.createElement("TD");


        data1.innerText = "X";
        data2.innerText = "O";
        data3.innerText = "X";


    row1.appendChild(data1);
    row1.appendChild(data2);
    row1.appendChild(data3);


    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);




    let content = document.getElementById("content");
    content.appendChild(table);


;}