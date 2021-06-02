
const connexion = require('../config/db');

class Restaurant{

    constructor(row){
      this.row = row;
    }

    static createRestaurant(data, file, callBack) {
      connexion.query(
        "INSERT INTO restaurant (nameRestaurant, imageRestaurant, adresseRestaurant, id_categorie)  VALUES (?,?,?,?)",
        [data.name, file, data.adresse, data.id_categorie],
          (err, res) => {
              if (err) throw err;
              return callBack(null, res);
          }
      );
    }

  static getListRestaurant(id, callBack) {
      connexion.query("SELECT * FROM restaurant where id_categorie = ?",
      [id],
      (err, res) => {
        if (err) throw err;
        return callBack(null, res);
      }
      );
  }

  static getListRestaurantById(id, callBack) {
    connexion.query("SELECT * FROM `restaurant`, categorie WHERE restaurant.id_categorie = categorie.id and restaurant.id = ?",
    [id],
    (err, res) => {
      if (err) throw err;
      return callBack(null, res);
    }
    );
  }

  static deleteRestaurantById(id, callBack) {
    connexion.query("DELETE FROM `restaurant` WHERE id = ?",
    [id],
    (err, res) => {
      if (err) throw err;
      return callBack(null, res);
    }
    );
  }
}

module.exports = Restaurant
