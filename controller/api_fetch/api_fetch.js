let api_fetch = (req, res) => {
  try {
    res.render('./api_fetch/api_fetch');
  } catch (e) { console.log(e); }
};

let api_fetch_show_more = (req, res) => {
  try {
    res.render('./api_fetch/show_more');
  } catch (e) { console.log(e); }
};

module.exports = { api_fetch, api_fetch_show_more };