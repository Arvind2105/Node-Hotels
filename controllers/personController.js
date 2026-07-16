import Person from '../models/persons.js';

const getPerson = async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addPerson = async (req, res) => {
  try {
    //assuming data will be req.body
    const data = req.body;
    //creating a new Person document using Person model;
    const newPerson = new Person(data);

    // saving a new person
    const savedPerson = await newPerson.save();
    console.log('Person saved successfully');
    res.status(201).json(savedPerson);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

const updatePerson = async (req, res) => {
  try {
    //Get ID from URL
    const personId = req.params.id;

    //Get updated data
    const updatedData = req.body;

    //Find and update document
    const updatedPerson = await Person.findByIdAndUpdate(
      personId,
      updatedData,
      {
        new: true, // return updated document
        runValidators: true, // Run mongoose validations
      },
    );

    if (!updatedPerson) {
      res.status(404).json({ message: 'Person not Found!' });
    }

    //Send response
    res.json(updatedPerson);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deletePerson = async (req, res) => {
  try {
    const personIdToDelete = req.params.id;
    console.log(personIdToDelete);

    //find the person and delete
    const deletedPerson = await Person.findByIdAndDelete(personIdToDelete);

    if (!deletedPerson) {
      res.status(404).json({ message: 'Person not Found!' });
    }

    res.json({ 'Person deleted successfully': deletedPerson });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { getPerson, addPerson, updatePerson, deletePerson };
