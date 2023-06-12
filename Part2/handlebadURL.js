app.use(function (req, res, next) {
    res.status(404);
    res.json({ error: 'Invalid URL' });
});