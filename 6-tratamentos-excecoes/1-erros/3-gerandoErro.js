try {
    const myError = new Error('Custom message');
    throw myError;
} catch (err) {
    console.log('Error:', err);
} finally {
    console.log('Keep going...');
}
// Error: Error: Custom message
// Keep going...