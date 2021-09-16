let peca = "cavalo"
peca = 'Rei'


switch (peca .toLowerCase()){
    case ('soldado'):
        console.log('move-se na casa vertical a sua frente, pode eliminar outras peças na diagonal');
    break;
    case ('cavalo'):
        console.log('move-se duas casas a frente e uma a esquerda ou direita');
        break;
    case ('bispo'):
        console.log('move-se nas diagonais, sem restrição no número casas');
        break;
    case ('torre'):
        console.log('move-se na vertical, sem restrição no número casas');
        break;
    case ('rainha'):
        console.log('move em todas as direções, sem restrição ao número de casas')
        break;
    case ('rei'):
        console.log('move em todas as direções, com restrição de uma casa');
        break;
    default:
        console.log('peça inválida');
}