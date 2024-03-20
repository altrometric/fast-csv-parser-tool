const fs = require('fs');
const parse = require('csv-parse/lib/sync'); // For demonstration, using csv-parse as an underlying parser

// Synchronously parse CSV from a string
function parseCSVFromString(csvString) {
  return parse(csvString, {
    columns: true,
    skip_empty_lines: true,
  });
}

// Asynchronously parse CSV from a file
function parseCSVFromFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, fileContent) => {
      if (err) {
        return reject(err);
      }
      resolve(parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
      }));
    });
  });
}

module.exports = { parseCSVFromString, parseCSVFromFile };
