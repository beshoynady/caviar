const Express = require('express');
const Cors = require('cors');


const app = Express();

app.use(Cors);

app.get('/api/',(req, res, next)=> {
    res.send('beshoy');
    }
)
const port = 8000

app.listen(port,(req, res, next) => {
    res.get('')
})


