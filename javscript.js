let qtdCartas = Number(prompt("Com quantas cartas deseja jogar?"));
let cartas = [];
let cartassorteadas = [];
let verificar = [];

//prompt até o usuario selecionar o numero de cartas
while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 !== 0) {
    qtdCartas = prompt("Com quantas cartas deseja jogar?(4-14)");
}
//prencher as cartas com as imagens
cartas[0]=  '<img src="images/bobrossparrot.gif">';
cartas[2]= '<img src="images/explodyparrot.gif"> ';
cartas[4]= '<img src="images/fiestaparrot.gif"> ';
cartas[6]= '<img src="images/metalparrot.gif"> ';
cartas[8]= '<img src="images/revertitparrot.gif"> ';
cartas[10]= '<img src="images/tripletsparrot.gif"> ';
cartas[12]= '<img src="images/unicornparrot.gif">';
cartas[1]= '<img src="images/bobrossparrot.gif">';
cartas[3]= '<img src="images/explodyparrot.gif"> ';
cartas[5]= '<img src="images/fiestaparrot.gif"> ';
cartas[7]= '<img src="images/metalparrot.gif"> ';
cartas[9]= '<img src="images/revertitparrot.gif"> ';
cartas[11]= '<img src="images/tripletsparrot.gif"> ';
cartas[13]= '<img src="images/unicornparrot.gif">';

sortearcartas();
distribuircartas();



function sortearcartas(){
    for(let index=0;index<qtdCartas;index++){
        cartassorteadas[index]=cartas[index];
        cartassorteadas.sort(comparador);
    }
}
function comparador() {
	return Math.random() - 0.5;
}

function distribuircartas(){
    caixa = document.querySelector(".caixa-cartas");
    for(i = 0; i < qtdCartas; i++){
        caixa.innerHTML += `<div onclick="selecionarcarta(this)" class="card">
        <div class="front-face face">
            ${cartassorteadas[i]}
        </div>
        <div class="back-face face">
            <img src="images/front.png">
        </div>
      </div>; `
    }
}

let primeiracarta= "";
let segundacarta = "";

function virarcarta(selecionado){
    selecionado.classList.toggle("selecionado");
}

function selecionarcarta(selecionado){
    if(selecionado.classList.contains("selecionado") === false){
        virarcarta(selecionado);
        if(primeiracarta === ""){primeiracarta=selecionado;}
        else {
            segundacarta=selecionado;
            if(primeiracarta.innerHTML !== segundacarta.innerHTML){
                setTimeout(virarcarta,1000,primeiracarta);
                setTimeout(virarcarta,1000,segundacarta);
            }
            
            primeiracarta="";
            segundacarta="";
        }
    }
}
