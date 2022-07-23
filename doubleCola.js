// Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1.

function whoIsNext(names, r){
    let queue = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"]  
    
    for (let i = 0; i < 22; i++) {
        const name = queue[i];
        for (let j = 5; j < 22; j++) {
            const name2 = queue[j];
        }
    }

    console.log(queue);

    return queue[r-1]

}

console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)); // Sheldon
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)); // Penny
