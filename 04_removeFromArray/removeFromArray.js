const removeFromArray = function(array, ...nums) {
    for (const num of nums) {
        array = array.filter((validNum) => validNum !== num);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
