try {
    console.log(name);
    const name = 'Alessandra';
} catch (err) {
    console.log('Error:', err);
}

console.log('Keep going...');
// Error: ReferenceError: Cannot access 'name' before initialization
// Keep going...

/*
Também pode ser executado da seguinte maneira
try {
    console.log(name);
    const name = 'Alessandra';
} catch (err) {
    console.log('Error:', err);
} finally {
    console.log('Keep going...');
}
*/