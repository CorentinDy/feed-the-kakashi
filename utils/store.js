const sqlite3 = require('sqlite3').verbose();
const fs = require("fs")
const path = "./db/data.db"

const db = new sqlite3.Database('./db/data.db', (err) => {
    if (err) {
        throw (err)
    }
    console.log('Connected to the data database.');
});

function store() {


    db.serialize(function () {

        // insert one row into the langs table
        db.run(`INSERT INTO main.feed(feed_title,feed_date,feed_action) VALUES(?,?,?)`, ['feed',new Date().getTime(),'true'], function (err) {
            if (err) {
                throw (err);
            }
            console.log(`A row has been inserted`);
        });
    });

    db.close();


}

function test_db() {
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


module.exports = store, check, test_db;