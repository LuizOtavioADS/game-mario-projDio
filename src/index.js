
function Player (nome, velocidade, manobrabilidaade, poder, pontos) {
    this.nome = nome
    this.velocidade = velocidade
    this.manobrabilidaade = manobrabilidaade
    this.poder = poder
    this.pontos = pontos
};

const player1 = new Player("Mario", 4, 3, 3, 0);

const player2 = new Player("Luigi", 3, 4, 4, 0);




async function rollDice(){
   return  Math.floor(Math.random() * 6) + 1;
};



async function playRaceEngine(character1, character2){

}

(async function main(){
    console.log(`🏁🚨 Corrida entre ${player1.nome} e ${player2.nome} começou... \n`);

    await playRaceEngine(player1, player2);
})();



