const removeFromArray = function(array,...x) {
    if (Array.isArray(x)) {
        x.forEach(element => {
            let index = array.indexOf(element);
            console.log('element ',element,' index ',index)
            while (index > -1){
            array.splice(index, 1)
            index = array.indexOf(element);

        }
    });
}
    else{
   const index = array.indexOf(x);
   if (index > -1){
    array.splice(index, 1)
   }}
return array
};

// Do not edit below this line
module.exports = removeFromArray;
