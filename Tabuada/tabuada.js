
document.getElementById('ok').addEventListener('click', function(){
    var lista = document.querySelector(".lista");
   var numero = document.getElementById("search");
   var te = numero.value;
   numero.value = '';
    numero = parseFloat(numero);
    var indice = 1;

   while(indice <= 10 ) {

    const temple = ( '<div class="eu">'+ '<br>'+ te + ' x '+ indice +' = ' + ( te * indice) + '<br>'+ '</div>');
    indice = indice + 1;
    lista.innerHTML += temple;
   
   

}
document.getElementById("search").style.display = "none";
document.getElementById("span").style.display = "none";
document.getElementById("limpar").style.display = "block";
document.getElementById("ok").style.display = "none";
  });



    document.getElementById('limpar').addEventListener('click', function(){
        document.querySelector('.lista').innerHTML = '';
        document.getElementById("limpar").style.display = "none";
        document.getElementById("ok").style.display = "block";
        document.getElementById("search").style.display = "block";
        document.getElementById("span").style.display = "block";
        });
   
