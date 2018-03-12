var db = require("../models");
var locksmith = require('../routes/locksmith.js');

module.exports = function(app) {

  app.get("/api/message/:poolId", function(req, res) {
    console.log(req.body);
    db.Message.findAll({
      where: { MessagePoolId: req.params.poolId } ////////////check with front-end/////////
    }).then(function(data) {
      res.json(data);
    });
  });

  //encode and decode messages
  app.post("/api/message/encode", function(req, res) {
    res.json(locksmith(req.body.key, req.body.message));
  });

  app.post("/api/message", function(req, res) {
    db.Message.create({
      body: req.body.body,
      UserUsername: req.body.UserUsername, 
      MessagePoolId: req.body.MessagePoolID
    }).then(function(data) {
      updateParentPool(req.body.MessagePoolID);
      res.json(data);
    });
  });

  app.delete("/api/message/:id", function(req, res) {
    db.Message.destroy({
      where: { id: req.params.id } ////////////check with front-end/////////
    }).then(function(data) {
      res.json(data);
    });
  });

}

function updateParentPool(id) {
  db.MessagePool.update({
    updateAt: Date.now()
  },
  {
    where: {
      id: id
    } 
  });
}