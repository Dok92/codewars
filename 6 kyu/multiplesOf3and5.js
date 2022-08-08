function solution(number){
  let result = 0
  for (let i = number -1; i > 0; i--) {
    if(i % 5 === 0 || i % 3 === 0) {
      result += i
    }
  }
  return result
}

function solution(number){
  let result = 0
  for (let i = 0; i < number/3; i++) {
    result += 3*i    
  }
  for (let i = 0; i < number/5; i++) {
    if (i % 3 !==0) {      
      result += 5*i    
    }
  }
  return result
}

// both solutions timed out


console.log(solution(10), 23);
console.log(solution(20), 78);
console.log(solution(100), 2318);