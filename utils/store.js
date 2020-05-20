const db = require('better-sqlite3')('./db/data.db')

function store() {
    try {
        const stmt = db.prepare('INSERT INTO main.feed(feed_title,feed_date,feed_action) VALUES(?,?,?)');
        stmt.run('feed', new Date().getTime(), 'true')
    } catch (err) {
        console.log(err)
        throw err; 
    }
}

function test_db() {
    try {
        const stmt = db.prepare('CREATE TABLE IF NOT EXISTS feed ( \
        feed_id INTEGER PRIMARY KEY, \
        feed_title TEXT NOT NULL, \
        feed_date datetime NOT NULL, \
        feed_action INTEGER NOT NULL \
    );');
        stmt.run()
    } catch (err) {
        throw err; 
    }
   
}

function read() {
    try {
        const stmt = db.prepare('SELECT feed_title as title, feed_date as date FROM main.feed').all();
        return stmt;
    } catch{
        throw err; 
    }
}

module.exports.store = store;
module.exports.test = test_db;
module.exports.read = read;
