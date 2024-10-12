const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const dataFile = './data.json';

app.use(express.json());

app.get('/data', (req, res) => {
  fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

app.post('/data', (req, res) => {
  const { body } = req;
  fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err) throw err;
    const parsedData = JSON.parse(data);
    parsedData.push(body);
    fs.writeFile(dataFile, JSON.stringify(parsedData), (err) => {
      if (err) throw err;
      res.status(201).send(body);
    });
  });
});

app.put('/data/:id', (req, res) => {
  const { body } = req;
  const { id } = req.params;
  fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err) throw err;
    const parsedData = JSON.parse(data);
    parsedData.forEach((item, index) => {
      if (item.id === id) {
        parsedData[index] = body;
      }
    });
    fs.writeFile(dataFile, JSON.stringify(parsedData), (err) => {
      if (err) throw err;
      res.send(body);
    });
  });
});

app.delete('/data/:id', (req, res) => {
  const { id } = req.params;
  fs.readFile(dataFile, 'utf8', (err, data) => {
    if (err) throw err;
    const parsedData = JSON.parse(data);
    parsedData.forEach((item, index) => {
      if (item.id === id) {
        parsedData.splice(index, 1);
      }
    });
    fs.writeFile(dataFile, JSON.stringify(parsedData), (err) => {
      if (err) throw err;
      res.sendStatus(204);
    });
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
