const {getFunFact, getProperties, digitSum, isPerfect, isPrime } = require('./helper')

exports.getNumberProperties = async (req, res) => {
    try {
        let num = parseInt(req.query.number)

        if (isNaN(num)) {
            return res.status(400).json({
              number: "alphabet",
              error: true,
            });
          }

        const response = {
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties: getProperties(num),
            digit_sum: digitSum(num),
            fun_fact: await getFunFact(num)
        };

        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}