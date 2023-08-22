// Question 1

Set[1,2,3,4];

// Question 2

'ref'

// Question 3

0: {Array(3) => true}
1: {Array(3) => false}

function hasDuplicate(arr) {
    const single = new Set(arr);
    if(arr.length === single.size) return false;
    console.log(arr.length, single.size)
    return true;
}

function vowelCount(string) {
    string = string.toLowerCase();
    const vowels = new Set('aeiou');
    const found = new Map();
    for(let i = 0; i < string.length; i++) {
        if(!vowels.has(string[i])) continue;
        if(!found.get(string[i])) found.set(string[i], 0); 
        found.set(string[i], found.get(string[i]) + 1)
    }
    return found;
}