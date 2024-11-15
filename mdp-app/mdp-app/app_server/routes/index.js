var express = require('express');
var router = express.Router();

//import controller
const mainController = require('../controllers/mainController')

//route
router.get('/', mainController.index);
router.get('/contact', mainController.contact);
router.get('/prodi', mainController.prodi);


// /* GET home page. */
// router.get('/', function(req, res, next) {
//     const berita = [
//         {
//             judul:"Berita 1",
//             isi: "Isi berita 1"
//         },
//         {
//             judul: "Berita 2",
//             isi: "Isi berita 2"
//         },

//     ];
    
    
//   res.render('index', { title: 'Home', berita,layout:'main' });
// });

module.exports = router;
