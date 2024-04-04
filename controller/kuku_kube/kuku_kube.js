let kuku_kube = (req, res) => {
  try {
    res.render("./kuku_kube/kuku_kube");
  } catch (e) { console.log(e); }
}

module.exports = kuku_kube;
