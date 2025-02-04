const {isArmstrong, isPerfect, isPrime, isEven, digitSum } = require('./helper')

exports.getNumberProperties = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}