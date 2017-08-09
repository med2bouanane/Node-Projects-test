

const config = {
    PORT: process.env.PORT || '3000',
    DB: process.env.MONGODB || 'mongodb://localhost:27017/shop',
    SECRET_TOKEN: 'mySecretToken'
}


module.exports = config