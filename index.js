const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;


let PintoresRouter = require('./routes/pintor');

const app = express();

app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname+'/public'));
app.use(fn:'/pintor',PintoresRouter);


mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://mabil_castelo:Jazzforever1@castelomabil4g-qqhlo.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(cadena,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log('conexion establecida =oD');
    })
    .catch(err=> console.log(err));


app.listen(port,()=>{
    console.log('Escuchando el puerto 3000');
});
