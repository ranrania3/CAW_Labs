const fs = require('fs');

if (process.argv.length !== 4) {
    console.error('Usage: node exo4.js <filename> "<text_to_write>"');
    process.exit(1);
}

const fileName = process.argv[2];
const textToWrite = process.argv[3];

fs.writeFile(fileName, textToWrite, 'utf8', (err) => {
    if (err) {
        console.error(`Error writing to file: ${err.message}`);
        process.exit(1);
    }

    console.log('The file has been saved!');

    // Read and display the contents of the file
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
            process.exit(1);
        }

        console.log(`Contents of ${fileName}:`);
        console.log(data);
    });
});
