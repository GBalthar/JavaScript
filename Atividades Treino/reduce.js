/*Somando todos os número de um Array*/
function soma(arr){
    return arr.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev + current;
    })
}

const arr = [1, 2];

console.log(soma(arr));


/*Calcular quanto sobra depois de comprar uma lista de coisas*/
const lista =[
    {
        name: 'Sabão Em Pó',
        preco: 30,
    },
    {
        name: 'Cereal',
        preco: 12,
    },
    {
        name: 'Toalha',
        preco: 30,
    }, 
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));