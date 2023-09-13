module.exports = {
  getHome: (req, res) => {
    try {
      res.send({ honey: "I'm Home!!!!" });
    } catch (err) {
      console.log(err);
    }
  },
};
