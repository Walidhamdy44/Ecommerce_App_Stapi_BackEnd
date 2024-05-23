app.get('/status', (req, res) => {
    res.type('text/plain');
    res.send('OK');
});
