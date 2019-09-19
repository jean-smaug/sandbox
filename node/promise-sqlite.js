const sqlite3 = require("sqlite3").verbose();

const util = require('util')

sqlite3.verbose()

const db = new sqlite3.Database("test.sqlite")

const run = util.promisify(db.run.bind(db))

// db.run(`
//   CREATE TABLE IF NOT EXISTS demo (
//     id INTEGER PRIMARY KEY,
//     text TEXT
//   ) 
// `)

run(`
  CREATE TABLE IF NOT EXISTS demo_aze (
    id INTEGER PRIMARY KEY,
    aze TEXT
  )
`)
.then(console.log)
.catch(console.error)