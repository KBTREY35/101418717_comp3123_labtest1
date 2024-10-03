function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject({ error: 'delayed exception!' });
        }, 500);
    });
}

// Test cases to see output
resolvedPromise()
    .then(message => console.log(message))
    .catch(error => console.error(error));

rejectedPromise()
    .then(message => console.log(message))
    .catch(error => console.error(error));
