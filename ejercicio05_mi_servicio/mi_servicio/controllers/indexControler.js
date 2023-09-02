const indexController = {
    index:(req, res, next) => {
        res.send('Nuestro Home!');
    }
}

module.exports = indexController;