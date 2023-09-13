const Person = require("../model/PersonModel");

module.exports = {
  postData: async (req, res) => {
    try {
      const { name } = req.body;
      const person = new Person({ name });
      await person.save();
      console.log("person data has been created");
      console.log(person);
      res.status(201).json(person);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },

  getData: async (req, res) => {
    try {
      const personId = req.params.id;
      const personData = await Person.findById(personId);
      if (!personData) {
        return res.status(404).send("person not found");
      }
      res.json(personData);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },

  updateData: async (req, res) => {
    try {
      const personId = req.params.id;
      const { name } = req.body;
      const updatedData = await Person.findByIdAndUpdate(
        personId,
        { name },
        { new: true }
      );
      if (!updatedData) {
        return res.status(404).send("person not found");
      }
      console.log("person updated");
      console.log(updatedData);
      res.json(updatedData);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },

  deleteData: async (req, res) => {
    try {
      const personId = req.params.id;
      const personData = await Person.findById(personId);
      if (!personData) {
        return res.status(404).send("User not found");
      }
      await Person.deleteOne(personData);
      console.log("User deleted");
      res.status(204).send("person successfully deleted");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  },
};
