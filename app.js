const express = require('express');
const postsRouter = require('./routers/posts');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHendler');

const app = express();                         // creo l'istanza dell'app Express
const port = 3000;                             // definisco la porta su cui il server ascolterà

app.use(express.static('public'));           // serve file statici dalla cartella 'public'


// Gestione delle rotte

app.get('/error', (req, res) => {               // rotta di test per error handling
    throw new Error('Errore!');                // lancia un errore per testare l'error handler
});

app.get('/', (req, res) => {                   // rotta principale
    res.send('Server del mio blog!');            // messaggio di benvenuto
});

app.use('/posts', postsRouter);                // rotta dei post

app.use(notFound);                             // middleware per not found
app.use(errorHandler);                         // middleware per error handling

app.listen(port, () => {                         // avvio del server
    console.log(`Server del mio blog in ascolto su http://localhost:${port}`);
});
