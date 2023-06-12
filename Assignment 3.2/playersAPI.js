//playersController.js
//Import players Model
players = require('./playersModel');
//For index
exports.index = function (req, res) {
    players.get(function (err, players) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got players Successfully!",
            data: players
        });
    });
};
//For adding new players
exports.add = function (req, res) {
    var players = new players();
    players.firstname = req.body.firstname;
    players.lastname = req.body.lastname;
    players.runs = req.body.runs;
    players.cacthes = req.body.catches;
    //Save and check error
    players.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: "New players Added!",
            data: players
        });
    });
};
// View players
exports.view = function (req, res) {
    players.findById(req.params.players_id, function (err, players) {
        if (err)
            res.send(err);
        res.json({
            message: 'players Details',
            data: players
        });
    });
};
// Update players
exports.update = function (req, res) {
    players.findById(req.params.players_id, function (err, players) {
        if (err)
            res.send(err);
        players.firstname = req.body.firstname;
        players.lastname = req.body.lastname;
        players.runs = req.body.runs;
        players.catches = req.body.catches;
        //save and check errors
        players.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "players Updated Successfully",
                data: players
            });
        });
    });
};
// Delete players
exports.delete = function (req, res) {
    players.deleteOne({
        _id: req.params.players_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'players Deleted'
        })
    })
}
