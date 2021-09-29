var order = [];
var clickedOrder = [];
var score = 0;

//0- verde
//1- vermelho
//2- amarelo
//3- azul

var blue = document.querySelector('.blue');
var red = document.querySelector('.red');
var green = document.querySelector('.green');
var yellow = document.querySelector('.yellow');

var shuffleOrder = () => {          // para criar a ordem aleatória
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(var i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}


var lightColor = (element, number) => {   //para ascender a próxima cor
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}


var checkOrder = () => {          // para checar ordem e botões clicados
    for(var i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n \u{2728} Parabéns,você acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}


var click = (color) => {                    // função que corresponde o 'clicar' do jogador
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}


var createColorElement = (color) => {    //para retornar a cor
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}


var nextLevel = () => {         // para próximo nível
    score++;
    shuffleOrder();
}


var gameOver = () => {      // para game over
    alert(`Pontuação: ${score}!\n \u{1F635} Você perdeu! \n Clique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}


var playGame = () => {      // para play game
    alert('Bem vindo ao Gênesis! Iniciando novo jogo! \u{1F3AE}');
    score = 0;

    nextLevel();
}


green.onclick = () => click(0);         //eventos de clique para as cores
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);



playGame();

