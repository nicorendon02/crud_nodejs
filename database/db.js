const pg = require('pg');

const connection = new pg.Client({
    host: 'localhost',
    user: 'nicorendon02',
    password: 'nico02020',
    port: 5432,
    database: 'users'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Connected to database');
});

module.exports = connection;
