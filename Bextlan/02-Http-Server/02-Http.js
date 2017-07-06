'use strict'

const http = require('http');
const url = require('url')
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html;charset=utf-8');

  let query = url.parse(req.url, true).query;
  console.log(query, query.name, req.url);

  if (query.name === undefined) {
    res.end(`<h1>Hola Anónimo</h1>`);
  }

  res.end(`<h1>Hola ${query.name}</h1>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});