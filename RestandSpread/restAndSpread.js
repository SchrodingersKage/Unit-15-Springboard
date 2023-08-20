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


const removeRandom = (items) => {
    let index = Math.floor(Math.random() * items.length)
    return [ ...items.slice(0, index), ...items.slice(index + 1, items.length)]
}

const extend = (array1, array2) => [...array1, ...array2]

const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val })


const removeKey = (obj, key) {
    const newObj = { ...obj }
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => ({ ...obj1, ...obj2})

const update = (obj, key, val) => ({ ...obj, [key]: val});

