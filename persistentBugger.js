function persistence(num) {
    let count = 1
    arr = String(num).split('').reduce((acc, cv)=> {
        return parseInt(acc) * parseInt(cv)
    })
}



console.log(persistence(999));

// console.log(persistence(39))