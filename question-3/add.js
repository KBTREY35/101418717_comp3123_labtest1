const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

// Create the Logs directory if it doesn't exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

process.chdir(logDir);

// Create 10 log files
for (let i = 0; i < 10; i++) {
    const logFile = `log${i}.txt`;
    fs.writeFileSync(logFile, `This is log file ${i}`);
    console.log(`Created: ${logFile}`);
}
