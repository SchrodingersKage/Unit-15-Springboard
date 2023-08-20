function filterOutOdds(...nums) {
    return nums.filter(num => num % 2 === 0)
}

const findMin = (...value) => Math.min(...value)


const mergeObjects = (object1, object2) => {
    return newObject = {...object1, ...object2}
}

const doubleAndReturnArgs = (arr, ...args) => {
    return newArr = [ ...arr, ...args.map(v => v * 2)]
}