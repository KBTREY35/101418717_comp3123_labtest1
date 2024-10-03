function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolved after 500ms');
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Rejected after 500ms'));
        }, 500);
    });
}

module.exports = { resolvedPromise, rejectedPromise };
