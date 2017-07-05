window.onload = function(){
    document.getElementById("img").onclick = ligar;
    setInterval(apresentaHoras, 1000);
}
function ligar(){
    document.getElementById("img").src="lib/_imagens/acesa.jpg"
    setTimeout(desligar,3000);
}
function desligar(){
    document.getElementById("img").src="lib/_imagens/lampada.jpg"
}
function apresentaHoras(){
    var agora = new Date();
    var horas = agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds();
    document.getElementById("horas").innerHTML = horas;
}