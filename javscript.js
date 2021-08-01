//let qtdCartas = Number(prompt("Com quantas cartas deseja jogar?"));

while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 !== 0) {
    qtdCartas = prompt("Com quantas cartas deseja jogar?");
}