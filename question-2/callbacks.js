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

