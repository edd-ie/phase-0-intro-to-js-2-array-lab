// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

// Append to end
function destructivelyAppendCat(name){
    cats.push(name);
    console.log(cats);
}

// Append to start
function destructivelyPrependCat(name){
    cats.unshift(name)
    console.log(cats);
}


//Remove last
function destructivelyRemoveLastCat(){
    cats.pop()
    console.log(cats);
}

//Remove first
function destructivelyRemoveFirstCat(){
    cats.shift()
    console.log(cats);
}


//copy cat to newCats
function appendCat(name){
    const newCats = [...cats, name];
    return newCats;
}


//prepends a cat to the cats array, returns a new array, leaving the cats array unchanged:
function prependCat(name){
    const newCats2 = [name, ...cats];
    return newCats2;
}

// removes the last cat in cats, returns a new array, leaving the cats array unchanged:
function removeLastCat() {
    const newCats3 = cats.slice(0, -1);
    return newCats3;
}


// removes the first cat from cats, returns a new array, leaving the cats array unchanged:
function removeFirstCat(){
    const newCats4 = cats.slice(1);
    return newCats4;
}
