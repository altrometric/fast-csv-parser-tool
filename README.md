# fast-csv-parser-tool

A utility for quickly parsing CSV data in Node.js. Supports both synchronous and asynchronous parsing.

## Installation

Install `fast-csv-parser-tool` using npm:

```bash
npm install fast-csv-parser-tool
```

## Usage

### Parse CSV from a String

```javascript
const { parseCSVFromString } = require('fast-csv-parser-tool');

const csvString = "name,age\nJohn,30\nJane,25";
const records = parseCSVFromString(csvString);
console.log(records);
```

### Parse CSV from a File

```javascript
const { parseCSVFromFile } = require('fast-csv-parser-tool');

parseCSVFromFile('path/to/your/file.csv')
.then(records => {
console.log(records);
})
.catch(error => {
console.error('Error parsing CSV:', error);
});
```
