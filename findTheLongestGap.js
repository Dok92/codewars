function gap(num) {
    let bin = num.toString(2)
    const reg = /[0]+1/g
    let gaps = bin.match(reg)
    console.log(gaps);
    if (gaps == null) {
        return 0
    } else return gaps.reduce((a, b) => a.legth > b.legth ? b : a)
    console.log(gaps.reduce((a, b) => a.legth > b.legth ? b : a))
}

   console.log(gap(9)) // ,2);
 console.log(gap(529)) // ,4);
 console.log(gap(20)) // ,1);
 console.log(gap(15)) // ,0);