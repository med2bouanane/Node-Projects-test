const app = require('../app');



const isValidtoken = (req, res, next) => {
    console.log('app ===>',app);
    console.log('req.headers ===>',req.headers);
    if (!req.headers.kl_token || req.headers.kl_token !== app.kl_token) {
        return res.status(403).json({
            message: 'Invalid Token'
        });
    }
    next();
};

module.exports = { isValidtoken }