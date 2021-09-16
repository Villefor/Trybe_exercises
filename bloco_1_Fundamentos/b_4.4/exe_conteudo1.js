let dadosUsuario = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

console.log ('a jogadora ' + dadosUsuario.name + ' ' + dadosUsuario.lastName + ' ' +'tem ' + dadosUsuario.age + ' ' + 'anos de idade');

console.log ('A jogadora ' + dadosUsuario.name + ' ' + dadosUsuario.lastName + ' ' + 'foi eleita a melhor do mundo por ' + dadosUsuario.bestInTheWorld.length + ' ' + 'vezes');

console.log ('a jogadora ' + dadosUsuario.name + ' ' + dadosUsuario.lastName + ' ' +'possui ' + dadosUsuario.medals.golden + ' ' + 'medalhas de ouro e ' + dadosUsuario.medals.silver + ' ' + 'Medalhas de prata');