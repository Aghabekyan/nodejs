const User = require('../models').User;

module.exports = {
  list(req, res) {
    return User
      .findAll({
          attributes: ['id', 'firstName', 'lastName']
        })
      .then((user) => res.status(200).send(user))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return User
      .findById(req.params.id)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'Student Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    console.log(req)
    return User
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName
      })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(400).send(error));
  }

};
