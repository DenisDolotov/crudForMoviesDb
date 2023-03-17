const Router = require('../framework/Router');
const controller = require('./controller')
const router = new Router();


router.post('/genres', controller.createGenre);
router.get('/genres',controller.getGenres);
router.put('/genres', controller.updateGenre);
router.delete('/genres', controller.deleteGenre);

router.post('/movies', controller.createMovie);
router.get('/movies',controller.getMovies);
router.put('/movies', controller.updateMovie);
router.delete('/movies', controller.deleteMovie);

module.exports = router;