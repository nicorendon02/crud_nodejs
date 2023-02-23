const express = require('express');
const router = express.Router();

const connection = require('./database/db');

router.get('/', (req, res) => {
    connection.query('SELECT * FROM user_data', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.render('index', { result: result.rows });
    }) 
});

// route to create a new user
router.get('/create', (req, res) => {
    res.render('create');
});

// route to edit a user
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM user_data WHERE id = $1', [id], (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.render('edit', { user: result.rows[0] });
    });
});

// route to delete a user
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM user_data WHERE id = $1', [id], (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.redirect('/');
    });
});

const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;