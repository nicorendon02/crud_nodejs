const connection = require('../database/db');

exports.save = (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    //console.log(id, name);
    connection.query('INSERT INTO user_data (id, name) VALUES ($1, $2)', [id, name], (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.redirect('/');
    });
}

exports.update = (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    connection.query('UPDATE user_data SET name = $1 WHERE id = $2', [name, id], (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.redirect('/');
    });
}