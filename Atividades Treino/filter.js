function filtro(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 !== 0; /* === vai filtrar pares e !== ímpares*/
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtro(meuArray));