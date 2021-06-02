
const connexion = require('../config/db');

class Categorie{

    constructor(row){
      this.row = row;
    }

    static createCategorie(data, file, callBack) {
      connexion.query(
        "INSERT INTO `categorie`(`name`, `image`) VALUES (?,?)",
        [data.name, file],
          (err, res) => {
              if (err) throw err;
              return callBack(null, res);
          }
      );
  }

  static getListCategories(callBack) {
      connexion.query("SELECT * FROM categorie",
          (err, res) => {
              if (err) throw err;
              callBack(res.map((row) => new Categorie(row)))
          }
      );
  }

}

module.exports = Categorie
