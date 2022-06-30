const data = {
    0: ["zero", "ten"],
    1: ["one", "eleven"],
    2: ["two", "twelve", "twenty"],
    3: ["three", "thirteen", "thirty"],
    4: ["four", "fourteen", "forty"],
    5: ["five", "fifteen", "fifty"],
    6: ["six", "sixteen", "sixty"],
    7: ["seven", "seventeen", "seventy"],
    8: ["eight", "eighteen", "eighty"],
    9: ["nine", "nineteen", "ninety"],
};
module.exports = function toReadable(number) {
    const numString = number.toString();
    if (numString.length === 1) {
        return data[number][0];
    } else if (numString.length === 2) {
        let result = "";
        if (numString.startsWith("1")) {
            return data[numString[1]][1];
        } else {
            return number % 10 === 0
                ? data[numString[0]][2]
                : data[numString[0]][2] + " " + data[numString[1]][0];
        }
    } else if (numString.length === 3) {
        return number % 100 === 0
            ? data[numString[0]][0] + " hundred"
            : data[numString[0]][0] +
                  " hundred " +
                  toReadable(+numString.slice(1));
    }
};
