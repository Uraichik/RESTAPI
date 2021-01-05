const one = require("../controllers/controller.js");

module.exports = (app) => {

    app.get('/api',(req,res) => {
        res.status(200).send({
            data : "Welcome Node Sequlize API v1"
        })
    })

    app.get('/about',one.getAbout);

    app.get('/create',one.getCreate);

    app.post('/create',one.postCreate);

    app.get('/edit/:id',one.getEdit);

    app.post('/edit',one.postEdit);

    app.post('/delete/:id',one.postDelete);

    app.post('/about2',one.postAbout2);

    app.get('/',one.get);

    app.get('/todo',one.getTodo);






}