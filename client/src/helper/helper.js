
export function attempts_Number(result) {
    return result.filter(r => r !== undefined).length;
}

export function earnPoints_Number(result, answers, point) {
    return result.map((element, i) => answers[i] === element)  //return boolean value array
    .filter(i => i).map(i => point)                               //return 10 instead of true value in array
    .reduce((prev,current) => prev + current, 0);              // return the sum of values of array
}

export function flagResult(totalPoints,earnPoints) {
    return (totalPoints * 50 / 100) < earnPoints  //earn points less than 50%
}