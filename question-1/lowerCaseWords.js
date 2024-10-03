function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            return reject(new Error('Input must be an array'));
        }
        const result = arr
            .filter(item => typeof item === 'string')
            .map(item => item.toLowerCase());
        resolve(result);
    });
}


lowerCaseWords(['PIZZA', 10, true, 25, false, 'Wings'])
    .then(result => console.log(result))
    .catch(error => console.error(error));

