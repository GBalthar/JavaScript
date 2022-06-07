/*Map Usando This*/
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> maçã', mapThis(nums, maca));

console.log('this -> laranja', mapThis(nums, laranja));


/*Map Sem Usar This (Mais Utilizado)*/
function mapNThis(arr){
    return arr.map(function(item){
        return item * 2
    })
}

const numeros = [2, 4, 6, 8, 10];

console.log(mapNThis(numeros));