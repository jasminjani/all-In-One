let api_fetch =  (req, res) => {
    res.render('./api_fetch/api_fetch');
};

let api_fetch_show_more =  (req, res) => {
    res.render('./api_fetch/show_more');
};

module.exports = { api_fetch, api_fetch_show_more };