// Code:

let cats = ["Milo", "Otis", "Garfield"];

function ResetCats(){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    return cats;
}

function destructivelyAppendCat(name){
    cats.push(name);
    console.log(cats);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    console.log(cats);
}

function destructivelyRemoveLastCat(){
    cats.pop();
    console.log(cats);
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    console.log(cats);
}

function appendCat(name){
    let NewCats = [...cats, name];
    console.log(cats);
    return NewCats;
}

function prependCat(name){
    let NewCats = [name, ...cats];
    console.log(cats);
    return NewCats;
}

function removeLastCat(){
    let NewCats = cats.slice(0,-1);
    console.log(cats);
    return NewCats;
}

function removeFirstCat(){
    let NewCats = cats.slice(1);
    console.log(cats);
    return NewCats;
}




