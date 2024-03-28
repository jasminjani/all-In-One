const jwt = require('jsonwebtoken');

const isAuthorization = (req, res, next) => {
    
    const token = req.cookies.token;

    if(token == undefined || token == null)
    {
        res.redirect("/login");
        return;
    }

    const decode = jwt.verify(token, 'jash');
    if(decode.email == undefined || decode.email == null || decode.email == '')
    {
        res.redirect("/login");
        return;
    }

    req.body.email = decode.email;
    next();
}

module.exports = isAuthorization;