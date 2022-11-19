var map = L.map('map').setView([19.45388900, -99.17491900], 13);
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btn10 = document.getElementById("btn10");
var btn11 = document.getElementById("btn11");
var btn12 = document.getElementById("btn12");
var btn13 = document.getElementById("btn13");


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var c1 = L.marker([19.466755385455752, -99.09080307527157]).addTo(map)
var c2 = L.marker([19.45225643616193, -99.21316493152612]).addTo(map)
var c3 = L.marker([19.570791631885786, -99.0192762891962]).addTo(map)
var c4 = L.marker([19.50056, -99.13972]).addTo(map)
var c5 = L.marker([19.46669, -99.09107]).addTo(map)
var c6 = L.marker([19.46669, -99.09107]).addTo(map)
var c7 = L.marker([19.46669, -99.09107]).addTo(map)
var c8 = L.marker([19.46669, -99.09107]).addTo(map)
var c9 = L.marker([19.46669, -99.09107]).addTo(map)
var c10 = L.marker([19.46669, -99.09107]).addTo(map)
var c11 = L.marker([19.46669, -99.09107]).addTo(map)
var c12 = L.marker([19.46669, -99.09107]).addTo(map)
var c13 = L.marker([19.46669, -99.09107]).addTo(map)

c9.bindPopup('CECyT No. 9 <br> "Juan de Dios Bátiz"').openPopup();

btn1.addEventListener("click",()=>{
    c1.bindPopup('CECyT No. 1 <br> "Gonzalo Vázquez Vela"').openPopup();
})

btn2.addEventListener("click",()=>{
    c2.bindPopup('CECyT No. 2 <br> "Miguel Bernard"').openPopup();
})

btn3.addEventListener("click",()=>{
    c3.bindPopup('CECyT No. 3 <br> "Estanislao Ramírez Ruiz"').openPopup();
})

btn4.addEventListener("click",()=>{
    c4.bindPopup('CECyT No. 4 <br> "Estanislao Ramírez Ruiz"').openPopup();
})
