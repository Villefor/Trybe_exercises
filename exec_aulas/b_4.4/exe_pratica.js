let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  console.log ('Bem vinda, ' + info.personagem)

  info.recorrente = 'Sim';

  console.log (info)

  for (let ficha in info) {
    console.log(ficha)
  }

  for (let ficha in info) {
    console.log (info[ficha])
  }


let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Pato Donald, Christmas on Bear Mountain, Dells Four Color Comics #178, O último MacPatinhas',
    nota: 'O último mac patinhas',
    recorrente: 'Sim'
  };

  console.log (info + info2)