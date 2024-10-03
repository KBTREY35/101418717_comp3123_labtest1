const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logDir)) {
    fs.readdirSync(logDir).forEach(file => {
        console.log(`Deleting file: ${file}`);
        fs.unlinkSync(path.join(logDir, file));
    });
    
    // Remove the Logs directory
    fs.rmdirSync(logDir);
    console.log('Logs directory deleted.');
} else {
    console.log('No Logs directory found.');
}
