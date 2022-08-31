const http = require('http');
const fs = require('fs')
const path = require('path')

const pIndex = path.join(__dirname, 'views', 'index.html')
const pContact = path.join(__dirname, 'views', 'contact.html')
const body = []

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {

        res.writeHead(200, {
            'content-type': 'text/html'
        })

        if (req.url === '/') {
            fs.readFile(pIndex, 'utf-8', (err, data) => {
                if (err) console.log(err);
                else {
                    res.write(data)
                    res.end()
                }
            })
        }

        if (req.url === '/contact') {
            fs.readFile(pContact, 'utf-8', (err, data) => {
                if (err) console.log(err);
                else {
                    res.write(data)
                    res.end()
                }
            })
        }

    } else if (req.method === 'POST') {
        res.writeHead(200, {
            'content-type': 'text/html; charset=utf-8'
        })

        if (req.url === '/') {
            req.on('data', (data) => {
                body.push(Buffer.from(data));
            })

            req.on('end', () => {
                res.write(body.toString())
                res.end()
            })
        }
    }
})
const port = process.argv[2]
console.log(port);

server.listen(port, () => {
    console.log(`Server working on port: ${port}`);
})