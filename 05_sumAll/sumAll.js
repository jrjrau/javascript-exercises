const sumAll = function(step1,step2) {
    let sum = 0
    if (step1 < 0 || step2 < 0 || !Number.isInteger(step1) || !Number.isInteger(step2)){
        sum = 'ERROR'
    }
    else{
    if (step1 < step2){
    while(step1 <= step2){
        sum += step1
        step1++
    }
}
    else {
        while(step2 <= step1){
            sum += step2
            step2++
        }

    }
}
    return sum
};

// Do not edit below this line
module.exports = sumAll;
