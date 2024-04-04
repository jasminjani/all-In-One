let js_event = (req, res) => {
  try {
    res.render("./js_event/js_event");
  } catch (e) { console.log(e); }
}

module.exports = js_event;
