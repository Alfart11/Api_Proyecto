const boom = require("@hapi/boom");
const crypto = require("crypto");
const sequelize = require("../libs/sequelize");

class AutoService{
  constructor(){
  }
  async create(auto) {
    const nuevoAuto = {
      id : crypto.randomUUID(),
      ...auto
    }
    const { id, nombre, precio} = nuevoAuto;
    const query = "insert into auto (id, nombre, precio) values ('"+id+"',' " + nombre+ "', " + precio + ")";
    await sequelize.query(query);
    return nuevoAuto;
    }

  async update(id, auto) {
    return auto;
  }

  delete(id) {
    return id;
  }

  async findAll() {
    const query = 'select * from auto';
    const [data] = await sequelize.query(query);
    return data;
  }

  findBy(id) {
    return id;
  }
}

module.exports = AutoService;
