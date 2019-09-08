const { encode } = require("@msgpack/msgpack");
const sqlite3 = require("sqlite3").verbose();

// const db = new sqlite3.Database("json.sqlite");
// db.run("CREATE TABLE IF NOT EXISTS my_table (data TEXT);");

// for (let i = 0; i < 10; i++) {
//   db.run(
//     "INSERT INTO my_table VALUES (json($data))",
//     {
//       $data: [1, 2, 3, 4, 5]
//     },
//     (err, data) => {
//       if (err) console.log(err);
//     }
//   );
// }

// db.close();

const db2 = new sqlite3.Database("msgpack.sqlite");
db2.run("CREATE TABLE IF NOT EXISTS my_table (data TEXT)");

db2.serialize(() => {
  for (let i = 0; i < 10; i++) {
    db2.run(
      "INSERT INTO my_table VALUES ($data))",
      {
        $data: encode([1, 2, 3, 4, 5])
      },
      (err, data) => {
        if (err) console.log(err);
      }
    );
  }
});

db2.close();
