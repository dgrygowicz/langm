const path = require('path');
const fs = require('fs');

function getData(fileName) {
  const filePath = path.join(__dirname, '..', 'data', fileName);
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
}

module.exports = { getData: getData };
