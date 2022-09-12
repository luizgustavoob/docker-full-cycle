const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000

const conn = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
})

conn.query(`INSERT INTO people(name) VALUES ('Luiz Gustavo')`)
var name = ""
conn.query(`SELECT * FROM people`, (err, results, fields) => {
    name = results[0].name
})
conn.end()        

app.get('/', (_, res) => {
    res.send(`
        <h1>Full Cycle</h1>

        </br>
        </br>

        <table>
            <tr>
                <th>Name</th>
            </tr>
            
            <tr>
                <td>${name}</td>
            </tr>
        </table>
    `)
})

app.listen(port, () => {
    console.log('app running on port', port)
})
