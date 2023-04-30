 function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
 }

const listaDeTeclas = document.querySelectorAll('.tecla')

var contador = 0

while (contador < listaDeTeclas.length ){
    const tecla = listaDeTeclas[contador];
    var instrumento = tecla.classList[1];
    var audio = `#som_${instrumento}`;
    tecla.onclick = function(){
        tocaSom(audio)
    };
    contador++    
}
 