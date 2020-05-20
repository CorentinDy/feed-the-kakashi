const sqlite3 = require('sqlite3').verbose();
const fs = require("fs")
const path = "./db/data.db"



function store() {
    const db = new sqlite3.Database('./db/data.db', (err) => {
        if (err) {
            throw (err)
        }
        console.log('Connected to the data database.');
    });

    db.serialize(function () {

        // insert one row into the langs table
        db.run(`INSERT INTO main.feed(feed_title,feed_date,feed_action) VALUES(?,?,?)`, ['feed', new Date().getTime(), 'true'], function (err) {
            if (err) {
                console.log(err);
                throw (err);
            }
            console.log(`A row has been inserted`);
        });
    });

    db.close();


}

function test_db() {
    const db = new sqlite3.Database('./db/data.db', (err) => {
        if (err) {
            throw (err)
        }
        console.log('Connected to the data database.');
    });
    db.serialize(function () {

        db.run('CREATE TABLE IF NOT EXISTS feed ( \
            feed_id INTEGER PRIMARY KEY, \
            feed_title TEXT NOT NULL, \
            feed_date datetime NOT NULL, \
            feed_action INTEGER NOT NULL \
        );');

    });

    db.close();
}

function check() {

    try {
        if (fs.existsSync(path)) {
            console.log("File exists.")
        } else {
            try {
                fs.writeFileSync('./db/data.db');
            } catch (e) {
                console.log("Cannot write file ", e);
            }
        }
    } catch (err) {
        console.error(err)
    }
}

function read() {
    const db = new sqlite3.Database('./db/data.db', (err) => {
        if (err) {
            throw (err)
        }
        console.log('Connected to the data database.');
    });

    // Print the records as JSON
    db.all("SELECT feed_title as title, feed_date as date FROM main.feed", function (err, rows) {
        console.log(JSON.stringify(rows));
    });
}


module.exports.store = store;
module.exports.check = check;
module.exports.test = test_db;
module.exports.read = read;
