module.exports = app => {
    const pautaController = require('../controllers/pauta.controller');

    app.route('/api/pauta')
    .get(pautaController.getAll)

    app.route('/api/pauta')
    .post(pautaController.create);

}