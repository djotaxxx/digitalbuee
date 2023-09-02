const ser = require("../db/servicios.json");

module.exports = {
  all: (req, res) => {
    res.send(ser);
  },

  create: (req, res) => {
    res.send("crear servicio");
  },

  update: (req, res) => {
    res.send("modificar servicio");
  },

  delete: (req, res) => {
    res.send("borrar servicio");
  },
};
