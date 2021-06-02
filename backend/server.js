const express = require('express');
const app = express();
let bodyParser = require('body-parser')
const multer = require('multer');

app.use(express.static('public'));
app.use('/categorie', express.static('categorie'));
app.use('/restaurant', express.static('restaurant'));

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './categorie/');
  },
  filename: function(req, file, cb){
    cb(null, file.originalname);
  }
})

const storageRestaurant = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './restaurant/');
  },
  filename: function(req, file, cb){
    cb(null, file.originalname);
  }
})

const upload = multer({
  storage: storage
});

const uploadResaturant = multer({
  storage: storageRestaurant
});

const Categorie = require('./model/categorie');
const Restaurant = require('./model/restaurant');

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.get(`/categories`, (req, res) => {
  Categorie.getListCategories((results, err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      return res.json({
        data:results
      });
    }
  });
})

app.post(`/categories`, upload.single('image'), (req, res) => {
  const file = "http://localhost:3000/categorie/" + req.file.filename;
  if (req.body === undefined || req.body === '') {
    res.json("Vous n'avez pas entré de informations :( ")
  } else {
    const body = req.body;
    Categorie.createCategorie(body, file, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to add categorie"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    })
  }
})

app.post(`/restaurant`, uploadResaturant.single('image'), (req, res) => {
  const file = "http://localhost:3000/restaurant/" + req.file.filename;
  if (req.body === undefined || req.body === '') {
    res.json("Vous n'avez pas entré de informations :( ")
  } else {
    const body = req.body;
    Restaurant.createRestaurant(body, file, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to add restaurant"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    })
  }
})

app.get(`/restaurant/:id`, (req, res) => {
  const id = req.params.id;
  Restaurant.getListRestaurant(id, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    if (!results) {
      return res.json({
        success: 0,
        message: "Record not Found"
      });
    }
    return res.json({
      data: results
    });
  });
})

app.get(`/restaurantById/:id`, (req, res) => {
  const id = req.params.id;
  Restaurant.getListRestaurantById(id, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    if (!results) {
      return res.json({
        success: 0,
        message: "Record not Found"
      });
    }
    return res.json({
      data: results
    });
  });
})

app.delete(`/restaurant/:id`, (req, res) => {
  const id = req.params.id;
  Restaurant.deleteRestaurantById(id, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    if (!results) {
      return res.json({
        success: 0,
        message: "Record not Found"
      });
    }
    return res.json({
      data: results
    });
  });
})

app.listen(3000, () => {
  console.log("Server up and running on port: ", 3000);
})
