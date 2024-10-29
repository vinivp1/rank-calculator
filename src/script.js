// Name , vitory, defeat
let players = [
    ["Vinicius" , 904, 757],
    ["Otávio" , 538, 496]
];

function rankBalance(vitory, defeat) {
    return vitory - defeat;
}

function rankPlayer(rank) {
    if (rank <= 10) {
        return "Ferro";
    } else if (rank > 10 && rank <= 20) {
        return "Bronze";
    } else if (rank > 20 && rank <= 50) {
        return "Prata";
    } else if (rank > 50 && rank <= 80) {
        return "Ouro";
    } else if (rank > 80 && rank <= 90) {
        return "Diamante";
    } else if (rank > 90 && rank <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

for (let player of players) {
    let vitory = player[1];
    let defeat = player[2];
    let balance = rankBalance(vitory, defeat);
    let level = rankPlayer(balance);
    console.log(`O Herói tem de saldo de ${balance} está no nível de ${level}`);
}