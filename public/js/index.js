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
var btn14 = document.getElementById("btn14");
var btn15 = document.getElementById("btn15");


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var c1 = L.marker([19.466755385455752, -99.09080307527157]).addTo(map)
var c2 = L.marker([19.45225643616193, -99.21316493152612]).addTo(map)
var c3 = L.marker([19.570791631885786, -99.0192762891962]).addTo(map)
var c4 = L.marker([19.39755528896244, -99.21432574144525]).addTo(map)
var c5 = L.marker([19.431237007248043, -99.1504121175045]).addTo(map)
var c6 = L.marker([19.467336534725362, -99.15801484686905]).addTo(map)
var c7 = L.marker([19.345775017463716, -99.02657877385602]).addTo(map)
var c8 = L.marker([19.487378729235832, -99.17525321803299]).addTo(map)
var c9 = L.marker([19.453306669990512, -99.17518819617604]).addTo(map)
var c10 = L.marker([19.455242533066514, -99.07959870269038]).addTo(map)
var c11 = L.marker([19.454168840640925, -99.16524296647867]).addTo(map)
var c12 = L.marker([19.462640676265444, -99.15203681618303]).addTo(map)
var c13 = L.marker([19.34006087289261, -99.12920085115029]).addTo(map)
var c14 = L.marker([19.446892402439744, -99.11513717966615]).addTo(map)
var c15 = L.marker([19.221754532679682, -98.99586784488903]).addTo(map)

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
    c4.bindPopup('CECyT No. 4 <br> "Lázaro Cárdenas"').openPopup();
})

btn5.addEventListener("click",()=>{
    c5.bindPopup('CECyT No. 5 <br> "Lázaro Cárdenas"').openPopup();
})

btn6.addEventListener("click",()=>{
    c6.bindPopup('CECyT No. 6 <br> "Miguel Othón de Mendizabal"').openPopup();
})

btn7.addEventListener("click",()=>{
    c7.bindPopup('CECyT No. 7 <br> "Cuauhtémoc"').openPopup();
})

btn8.addEventListener("click",()=>{
    c8.bindPopup('CECyT No. 8 <br> "Narciso Bassols"').openPopup();
})

btn9.addEventListener("click",()=>{
    c9.bindPopup('CECyT No. 9 <br> "Juan de Dios Bátiz"').openPopup();
})

btn10.addEventListener("click",()=>{
    c10.bindPopup('CECyT No. 10 <br> "Carlos Vallejo Márquez"').openPopup();
})

btn11.addEventListener("click",()=>{
    c11.bindPopup('CECyT No. 11 <br> "Wilfrido Massieu"').openPopup();
})

btn12.addEventListener("click",()=>{
    c12.bindPopup('CECyT No. 12 <br> "José María Morelos"').openPopup();
})

btn13.addEventListener("click",()=>{
    c13.bindPopup('CECyT No. 13 <br> "Ricardo Flores Magón"').openPopup();
})

btn14.addEventListener("click",()=>{
    c14.bindPopup('CECyT No. 14 <br> "Luis Enrique Erro Soler"').openPopup();
})

btn15.addEventListener("click",()=>{
    c15.bindPopup('CECyT No. 15 <br> "Diodoro Antúnez Echegaray"').openPopup();
})