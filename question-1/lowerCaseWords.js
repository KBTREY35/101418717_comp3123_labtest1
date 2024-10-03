function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            return reject(new Error('Input must be an array'));
        }
        
        const result = arr
            .filter(item => typeof item === 'string') // filter non strings
            .map(item => item.toLowerCase()); // convert to lowercase
        
        resolve(result);
    });
}

module.exports = lowerCaseWords;
