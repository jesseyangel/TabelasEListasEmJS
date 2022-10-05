var rangel = {nome:"Rangel", vitorias: 2, empates: 1, derrotas: 1, pontos: 0};
var gabriela = {nome:"Gabriela", vitorias: 1, empates: 1, derrotas: 2, pontos: 0};

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3 ) + jogador.empates;
    return pontos;
}

rangel.pontos = calculaPontos(rangel);
gabriela.pontos = calculaPontos(gabriela);

var jogadores = [rangel, gabriela, Casssio];

function exibeJogadoresNaTela(jogadores){
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento += "<td><button onClick='adicionarVitoria()'>Vitória</button></td>";
    elemento += "<td><button onClick='adicionarEmpate()'>Empate</button></td>";
    elemento += "<td><button onClick='adicionarDerrota()'>Derrota</button></td>";
    elemento += "</tr>";

    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}