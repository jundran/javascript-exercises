const repeatString = function(string = "", num = 0) {
    if(isNaN(num) || num < 0) return "ERROR"

    let output = ""
    for (let i = 0; i < num; i++) {
        output += string
    }
    return output

    //return string.repeat(num)
};

// Do not edit below this line
module.exports = repeatString;
