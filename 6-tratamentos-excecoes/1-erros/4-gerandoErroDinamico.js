class CustomError extends Error {
    constructor({ message, data }) {
        super(message);
        this.data = data;
    }
}

try {
    const myError = new CustomError({
        message: 'Custom messagem on custom error',
        data: {
            type: 'Server error'
        }
    });
    throw myError;
} catch (err) {
    console.log(err);
    console.log(err.data);

    if (err.data.type === 'Server error') {
        // ...
    } else {
        // ...
    }

} finally {
    console.log('Keep going...');
}
// Error: CustomError: Custom messagem on custom error
// { type: 'Server error' }
// Keep going...