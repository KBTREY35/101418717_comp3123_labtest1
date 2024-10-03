const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

process.chdir(logDir);


for (let i = 0; i < 10; i++) {
    const logFile = `log${i}.txt`;
    fs.writeFileSync(logFile, `This is log file ${i}`);
    console.log(`Created: ${logFile}`);
}
