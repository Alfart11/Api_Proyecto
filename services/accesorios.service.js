const boom = require("@hapi/boom");
const crypto = require("crypto");

class AccesorioService{
  constructor(){
   
  }

  async create(accesorio) {
    accesorio.id = faker.datatype.uuid();
    this.accesorios.push(accesorio);
  }

  update(id, accesorio) {
    const posicion = this.accesorios.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw new Error("Accesorio no encontrado");
    }
    this.accesorios[posicion] = accesorio;
    return this.accesorios[posicion];
  }

  delete(id) {
    const posicion = this.accesorios.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw new Error("Accesorio no encontrado");
    }
    this.accesorios.splice(posicion, 1);
    return {
      mensaje: "operacion realizada",
      id
    };
  }

  findAll() {
    return this.accesorios;
  }

  findBy() {
    return this.accesorios.find(item => item.id === id);
  }
}

module.exports = AccesorioService;
