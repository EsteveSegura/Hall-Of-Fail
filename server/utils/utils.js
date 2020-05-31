function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function takeArray(array, n) {
    console.log(array.length)
    if (array.length < n) {
        return null
    } else {
        let newArr = array.filter((val, i) => {
            if (i < n) {
                return val
            }
        })
        console.log(newArr.length)
        return newArr;
    }
}

function randomRangeInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function createRandomName() {
    const listaAnimales = ["Abeja", "Alce", "Aguila", "Ardila", "Antilope", "Anguila", "Babosa", "Burro", "Buitre", "Bufalo", "Caiman", "Cabra", "Camello", "Cisne", "Cobaya", "Cangrejo", "Cerdo", "Conejo", "Chacal", "Delfin", "Elefante", "Erizo", "Gaviota", "Jabali", "Hormiga", "Koala", "Leon", "Langosta", "Loro", "Lobo", "Lince", "Medusa", "Mandril", "Musaraña", "Orca", "Ostra", "Oso", "Oveja", "Pez", "Pulpo", "Puma", "Rana", "Sapo", "Tiburon", "Tucan", "Vaca", "Zorro", "Zarogueya"]
    const listaAdjetivos = ["Retrasado", "Subnormal", "Estupido", "Ignorante", "Feucho", "Zopenco", "Bobo", "Avaro", "Inutil", "BocaChancla", "BocaBuzon", "Belloto", "Brasas", "Carapapa", "Carcamal", "Ceporoo", "Cabestro", "Cenutrio", "Descerebrado", "CuloPollo", "AllanaBarrancos", "Fariseo", "Gañan", "LloraMigas", "Gandul", "Merluzo", "Melon", "Pagafantas", "Plomo"]
    return `${listaAnimales[randomRangeInt(0, listaAnimales.length - 1)]}${listaAdjetivos[randomRangeInt(0, listaAdjetivos.length - 1)]}`
}
/*
let oldArr = [0, 123, 1, 23, 123, 3, 1, 2, 3, 12, 3, 123, 3, 1231232, 2]
let ArrayHola = ["asdasd","asdasd","asdasd","asdasdasd","123123","zxczxc"]
console.log(takeArray(oldArr,15))
*/

module.exports = { shuffleArray, takeArray, createRandomName, randomRangeInt }