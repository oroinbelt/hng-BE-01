const axios = require('axios')
exports.isEven = (num) => {
    const result = num % 2 == 0 ? true : false
    return result
}

exports.isPrime= (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

exports.isPerfect = (num) => {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}

exports.digitSum = (n) => {
    return n.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
}

exports.isArmstrong = (num) => {
    const digits = num.toString().split('').map(Number);
    const power = digits.length;
    return num === digits.reduce((sum, digit) => sum + Math.pow(digit, power), 0);
}

exports.getProperties = (num) => {
    const properties = [];
  
    if (exports.isArmstrong(num)) properties.push("armstrong");
    if (num % 2 === 0) properties.push("even");
    else properties.push("odd");
  
    return properties;
}

exports.getFunFact = async (num) => {
    const funFactResponse = await axios.get(`http://numbersapi.com/${num}`);
    return funFactResponse.data;
}