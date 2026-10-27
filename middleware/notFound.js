function notFound(req, res, next) {
    res.status(404);
    res.json({
        status: '404',
        messaggio: 'La pagina non è stata trovata'
    });
}

module.exports = notFound;
