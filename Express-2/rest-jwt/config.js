'use strict'


const config = {

	PORT: process.env.PORT || '3001',
	DB: process.env.MONGODB || 'mongodb://localhost:27017/shop',
	SECRET_TOKEN: 'mySecterToken'
}


module.exports = config