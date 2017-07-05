window.onload = function(){
    document.getElementById("botao").onclick = function(){
        //status, statusText=OK, responseText, responseXML
        var ajax = new XMLHttpRequest();
        var r = document.getElementById("resposta");
        ajax.onreadystatechange = function(){
            if(ajax.readyState == 4){
                //alert(ajax.responseText);
                //r.appendChild(document.createTextNode(ajax.responseText));
                r.innerHTML= ajax.responseText;
            }
        }
        ajax.open("POST","ajax/arquivo.txt", true);
        ajax.send(null);
        return false;
    }
}