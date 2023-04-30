 function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
 }

const listaDeTeclas = document.querySelectorAll('.tecla')

var contador = 0

while (contador < listaDeTeclas.length ){
    const tecla = listaDeTeclas[contador];
    tecla.onclick = function(){
        var instrumento = tecla.classList[1];
        var audio = `#som_${instrumento}`;
        tocaSom(audio)
    };
    
    contador++    
}
 