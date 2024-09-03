const fibonacci = function(number) {
    number = Number(number)
    let n1 = 0
    let n2 = 1
    let count = 0
    while (count < number){
        n2 = n1+n2
        n1 = n2-n1
        count++
    }
    if (number >= 0){
        return n1
    }
    else{
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
