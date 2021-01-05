const db = require("../models");
const User = db.tutorials;
const Op = db.Sequelize.Op;

module.exports = {

    async getAbout (req,res) {

        try {

            User.findAll({raw: true }).then(data=>{
                res.render("index.hbs", {
                  users: data
                });
              }).catch(err=>console.log(err));

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },

    async getCreate (req,res) {

        try {

            res.render("create.hbs");

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },
 
    async postCreate (req,res) {

        try {

            if(!req.body) return res.sendStatus(400);
         
    const username = req.body.name;
    const userage = req.body.age;
    User.create({ name: username, age: userage}).then(()=>{
      res.redirect("/about");  
    }).catch(err=>console.log(err));

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },

    async getEdit (req,res) {

        try {

            const userid = req.params.id;
  User.findAll({where:{id: userid}, raw: true })
  .then(data=>{
    res.render("edit.hbs", {
      user: data[0]
    });
  })
  .catch(err=>console.log(err));

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },

    async postEdit (req,res) {

        try {

            if(!req.body) return res.sendStatus(400);
 
  const username = req.body.name;
  const userage = req.body.age;
  const userid = req.body.id;
  User.update({name:username, age: userage}, {where: {id: userid} }).then(() => {
    res.redirect("/about");
  })
  .catch(err=>console.log(err));

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },

    async postDelete (req,res) {

        try {

            const userid = req.params.id;
  User.destroy({where: {id: userid} }).then(() => {
    res.redirect("/about");
  }).catch(err=>console.log(err));

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },

    async postAbout2 (req,res) {

        try {

            if (req.body.pass !== "123123") {
                 res.send('Пароль не верный')
            } if (req.body.pass == "123123") {
                 res.redirect("/about");
            }

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },

    async get (req,res) {

        try {

            res.sendfile('index.html')

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },

    async getTodo (req,res) {

        try {

            res.sendfile('todo.html')

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },











}




    



