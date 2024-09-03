const palindromes = function (string) {
    let punctuation = /[\.,?!\s]/g;
    string = string.toLowerCase().replace(punctuation,"")
    let array = string.split('');
    let split = array.reverse();
    let gnirts = split.join("")


    if (string === gnirts){
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
