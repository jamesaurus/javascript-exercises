const fibonacci = function(num) {
    let precedingOne = 1;
    let precedingTwo = 1; 
    let member = 1;

    if (num == 0) { return 0; } 
    if (num < 0) { return "OOPS"; }

    for (let i = 2; i < num; i++) {
        member = precedingOne + precedingTwo;
        precedingOne = precedingTwo;
        precedingTwo = member;
    }

    return member; 
};

// Do not edit below this line
module.exports = fibonacci;
