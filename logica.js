var entrada = document.querySelector("#entrada");
var salida = document.querySelector("#salida");

var encriptarTexto = document.querySelector("#encriptar");
var desencriptarTexto = document.querySelector("#desencriptar");
var copiarTexto = document.querySelector("#copiar");

var tarjeta1 = document.querySelector(".area2");

entrada.focus();

    function encriptando(){ //función para encriptar el texto
        var entradaTexto = entrada.value;
        var textoEncriptado = entradaTexto
            .replaceAll("e","enter")
            .replaceAll("i","imes")
            .replaceAll("a","ai")
            .replaceAll("o","ober")
            .replaceAll("u","ufat");
        salida.value=textoEncriptado;
        if(entradaTexto==""){
            alert("El campo se ecuentra vacio");
            document.getElementById("muñeco").style.display="block"
            document.getElementById("mensaje1").style.display="block"
            document.getElementById("mensaje2").style.display="block"
        }else{
            document.getElementById("copiar").style.display= "block"
            document.getElementById("muñeco").style.display="none"
            document.getElementById("mensaje1").style.display="none"
            document.getElementById("mensaje2").style.display="none"
        }
        entrada.value="";
        entrada.focus();
        
    }
    encriptarTexto.onclick=encriptando;
        
    function desencriptando(){ //función para desencriptar el texto
        var textoEncriptado = entrada.value;
        var entradaTexto = textoEncriptado
            .replaceAll("enter","e")
            .replaceAll("imes","i")
            .replaceAll("ai","a")
            .replaceAll("ober","o")
            .replaceAll("ufat","u");
        salida.value= entradaTexto;
        if(entradaTexto==""){
            alert("El campo se ecuentra vacio");
            document.getElementById("muñeco").style.display="block"
            document.getElementById("mensaje1").style.display="block"
            document.getElementById("mensaje2").style.display="block"
        }else{
            document.getElementById("copiar").style.display= "block"
            document.getElementById("muñeco").style.display="none"
            document.getElementById("mensaje1").style.display="none"
            document.getElementById("mensaje2").style.display="none"
        }
        entrada.value="";
        entrada.focus();
    }
    desencriptarTexto.onclick=desencriptando;

    function copiando(){ //función para copiar el texto
        var textoEncriptado = salida.value;
        navigator.clipboard.writeText(textoEncriptado);
        if(textoEncriptado==""){
            alert("El campo se ecuentra vacio");
        }
        salida.value="";
        entrada.focus();
        document.getElementById("muñeco").style.display="block"
        document.getElementById("mensaje1").style.display="block"
        document.getElementById("mensaje2").style.display="block"
    }

    copiarTexto.onclick=copiando;