const axios = require('axios')
exports.isEven() = (num) => {
    const result = num % 2 == 0 ? true : false
    return result
}

exports.isPrime= (n) => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

exports.isPerfect = (n) => {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) sum += i;
    }
    return sum === n;
}

exports.isArmstrong = (n) => {
    const digits = n.toString().split('').map(Number);
    const power = digits.length;
    return n === digits.reduce((sum, digit) => sum + Math.pow(digit, power), 0);
}

exports.digitSum = (n) => {
    return n.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
}

exports.isNumber = (num) => {
    return isNaN(num)
}

exports.getFunFact = async (numm) => {
    const funFactResponse = await axios.get(`http://numbersapi.com/${number}`);
    const funFact = funFactResponse.data;
}