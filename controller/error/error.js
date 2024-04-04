let error = (req, res) => {
  try {
    res.write("404 page not found");
    res.end();
  } catch (e) { console.log(e); }
}

module.exports = error;