const {getFunFact, getProperties, digitSum, isPerfect, isPrime } = require('./helper')

exports.getNumberProperties = async (req, res) => {
    try {
        let num = req.query.number

        const integerRegex = /^\d+$/;

        if (!integerRegex.test(num)) {
            return res.status(400).json({
                number: req.query.number,
                error: true,
                // message: 'Not a valid integer'
            });
        }

        num = parseInt(num)

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