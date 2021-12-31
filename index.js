// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    cats.pop()
}

function destructivelyRemoveFirstCat(name){
    cats.shift()
}

function appendCat(name){
    const copyOfCats = [...cats, name]
    return copyOfCats
}

function prependCat(name){
    const newCats = [name, ...cats]
    return newCats
}

function removeLastCat(name){
    const otherCats = cats.slice(0, cats.length - 1)
    return otherCats
}

function removeFirstCat(name){
    const lastCats = cats.slice(1)
    return lastCats
}