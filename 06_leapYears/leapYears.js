const leapYears = function(year) {
    // divisible by 4
    // NOT divisible by 100
    // UNLESS they are divisible by 400


    if (year % 4 === 0){
        if (year % 100 === 0 && year % 400 !== 0 ){
            return false
    }
        else {
            return true
        }
    }
    else {
        return false
    }
}

// Do not edit below this line
module.exports = leapYears;
