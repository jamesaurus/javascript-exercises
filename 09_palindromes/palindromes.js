const palindromes = function (string) {
    const alphabetNumeric = "abcdefghijklmnopqrstuvwxyz0123456789"
    
    // Clean the string
    const cleanedString = string.toLowerCase()
                                .split("")
                                .filter((char) => alphabetNumeric.includes(char))
                                .join("");

    // Create reverse of the cleaned string
    const reverseString = cleanedString.split("").reverse().join("");

    // Check if its a palindrome
    return cleanedString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
