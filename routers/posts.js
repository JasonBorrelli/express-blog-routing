const express = require('express');
const connection = require('../data/db');



const router = express.Router();

router.get('/',(req,res)=>{
    const sql = 'SELECT * FROM posts'

    connection.query(sql, (err, results)=> {
        if(err) return next(err);

        res.json(results);
    });

   /*  res.send('Lista di post'); */
});

router.get('/:id',(req,res,next)=>{ 

    const id = req.params.id;
    const sql = `SELECT * FROM posts WHERE id=${id}`;
   

    connection.query(sql, (err, results) => {
        if(err) return next(err);

        res.json(results);
    });

   /*  
    res.send(`Visualizzo il post ${id}`) */ 
});

router.post('/',(req,res)=>{
    res.send(`Creazione di un nuovo post`)
})

router.put('/:id',(req,res)=>{
    const id = req.params.id;
    res.send(`Aggiornamento completo del post ${id}`)
})

router.patch('/:id', (req,res)=>{
    const id = req.params.id;
    res.send(`Aggiornamento parziale del post ${id}`)
})

router.delete('/:id',(req,res)=>{
    const id = req.params.id;
    res.send(`Eliminazione del post ${id}`)
})


module.exports = router;
