// Don't forget to convert the percent parameter as a percentage in the body of your function: 
// if the parameter percent is 2 you have to convert it to 0.02.
//* 1 
function nbYear(p0, percent, aug, p) {
    let years = 0    
    while (p0 < p) {
        p0 += p0 * (percent / 100) + aug
        years ++
    }    
    return years
}




console.log(nbYear(1500, 5, 100, 5000)) // -> 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)) // -> 10 