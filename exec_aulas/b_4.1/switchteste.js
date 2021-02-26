let resultado = 'Aprovado && lista && reprovado';

switch (nota) {
    case (nota >= 80):
        console.log('Aprovado');
        break;
    case (nota < 80 && nota >= 60):
        console.log('lista');
        break;
    case (nota <60):
        console.log('reprovado');
        break;
    default:
        console.log ('não se aplica');
    }
