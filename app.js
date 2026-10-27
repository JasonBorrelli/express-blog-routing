const express = require('express');
const postsRouter = require('./routers/posts');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHendler');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use

// Gestione delle rotte

app.get('/', (req, res) => {
    res.send('Server del mio blog!');
});

app.use('/posts', postsRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server del mio blog in ascolto su http://localhost:${port}`);
});
