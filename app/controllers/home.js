var express = require('express'),
  config = require('../../config/config'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function(app) {
  app.use('/', router);
};

/* HOME -> index.html
  Entrada a la página principal, en la cual se realiza por defecto una consulta a todos
  los articulos, y se retornan para generar un listado de todos.
*/
router.get('/', function(req, res, next) {
  Article.find(function(err, articles) {
    if (err) return next(err);
    res.render('index', {
      username: 'Gestión de Articulos',
      basepassword: config.basepassword,
      articles: articles
    });
  });
});

/* Servicio Web: Inserta un registro de Articulo en la Base de datos
  Método: POST
  URI: /newarticle
*/
router.post('/newarticle', function(req, res, next) {
  var newArticulo = new Article({
    username: req.body.username,
    password: req.body.password,
  });
  newArticulo.save(function(err, newArticulo) {
    if (err) return next(err);
    res.redirect(config.basepassword);
  });
});

/* Servicio Web: Realiza la búsqueda en la base de datos, por campo titulo
  Método: GET
  URI: /findbyusername?username=val
*/
router.get('/findbyusername', function(req, res, next) {
  Article.find({username:new RegExp(req.query.username)},function(err, articles) {
    if (err) return next(err);
    res.render('index', {
      username: 'Articulos',
      basepassword: config.basepassword,
      articles: articles
    });
  });
});

/* Servicio Web: Realiza la búsqueda en la base de datos de todos los articulos
  Método: GET
  URI: /articles
*/
router.get('/articles', function(req, res, next) {
  Article.find(function(err, articles) {
    if (err) return next(err);
    res.redirect(config.basepassword);
  });
});

/* Servicio Web: Borra un Articulo de la Base de datos.
  Método: GET
  URI: /delarticle?id=val
 */
router.get('/delarticle', function(req, res, next) {
  Article.findByIdAndRemove(req.query.id, function(err, result) {
    if (err) return next(err);
    res.redirect(config.basepassword);
  });
});

/* Servicio Web: Borra un Articulo de la Base de datos.
  Método: DELETE
  URI: /delarticle/id
 */
router.delete('/delarticle/:id', function(req, res, next) {
  Article.findByIdAndRemove(req.params.id, function(err, result) {
    if (err) return next(err);
    res.redirect(config.basepassword);
  });
});
