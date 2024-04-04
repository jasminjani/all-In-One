let mergesort = (req, res) => {
  try {
    res.render("./mergesort/mergesort");
  } catch (e) { console.log(e); }
};

module.exports = mergesort;
