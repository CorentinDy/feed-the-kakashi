const db = require('better-sqlite3')('./db/data.db')

async function store() {
    try { 
        let time = process.hrtime();
        const stmt = db.prepare('INSERT INTO main.feed(feed_title,feed_date,feed_action) VALUES(?,?,?)');
        stmt.run('feed', new Date().getTime(), 'true')
         time = process.hrtime(time);
          console.log("db store " + ((time[0] + time[1] / 1E9) * 1000) + " ms"); // <<<=== Should be far less that 1 ms 
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
