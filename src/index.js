
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

async function getRandomBlock(){
    let random = Math.random()
    let result; 

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
    
        case random < 0.66:
            result = "RESULT"
            break;

        default:
            result = "CONFRONTO"
            break;
    }
    return result;
}

async function playRaceEngine(character1, character2){
    
    for(let i = 1; i <= 5; i++){
        console.log(`🏁 Rodada ${i}`);
        
        //Sortear bloco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);
    }

        //Rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //Teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if(block === "RETA"){
            totalTestSkill1 = diceResult1 + character1.velocidade
            totalTestSkill2 = diceResult2 + character2.velocidade
        }
        if(block === "CURVA"){
            totalTestSkill1 = diceResult1 + character1.manobrabilidaade
            totalTestSkill2 = diceResult2 + character2.manobrabilidaade
        }
        if(block === "CONFRONTO"){
           
        }
    }

(async function main(){
    console.log(`🏁🚨 Corrida entre ${player1.nome} e ${player2.nome} começou... \n`);

    await playRaceEngine(player1, player2);
})();



