function errorHendler(err, req, res, next) {
    console.error(err);
    res.status(500).json({
        status: '500',
        message: 'Il servizio non è al momento disponibile, riprova più tardi.'
    });
}

module.exports = errorHendler;