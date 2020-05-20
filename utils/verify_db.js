const fs = require("fs")
const path = "./db/data.db"

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
module.export = check;