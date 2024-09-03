const repeatString = function(word,times) {
    let i =0;
    let result = '';
    if (times >=0){
        while (i<times){
            i++
            result += word
        }

    }
    else {
        result = 'ERROR'
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
