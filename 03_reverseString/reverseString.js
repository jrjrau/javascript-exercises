const reverseString = function(string) {
    let array = string.split('');
    let split = array.reverse();
    let result = split.join("")
    return result
};

// Do not edit below this line
module.exports = reverseString;
