

const mainController = {
    index(req, res) {
        try {
            return res.render('index');
        } catch (error) {
            console.log(error.message);
            console.log(error.stack);
            return res.status(500).send('Un erreur');
        }
    },
    homes(req, res) {
        try {
            return res.render('homes');
        } catch (error) {
            console.log(error.message);
            console.log(error.stack);
            return res.status(500).send('Un erreur');
        }
    },
    reserver(req, res) {
        try {
            return res.render('reserver');
        } catch (error) {
            console.log(error.message);
            console.log(error.stack);
            return res.status(500).send('Un erreur');
        }
    },

}


module.exports = mainController;
