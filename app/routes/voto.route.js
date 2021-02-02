module.exports = app => {
    const votoController = require('../controllers/voto.controller');

    app.route('/api/voto')
    .get(votoController.getAll)

    app.route('/api/voto')
    .post(votoController.create);

}