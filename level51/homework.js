function findMinMax(array) {
    if (array.length === 0) {
        return null
    }

    let max = Math.max(array)
    let min = Math.min(array)

    return [max, min]
}

const numbers = [1000,312,364,7817381,-1231241]
const result = findMinMax(numbers)
console.log(result)