const express = require('express');
const app = express();
const port = 4500;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app
  .get('/', (req, res) => res.send('Hello World!'))
  .post('/login', (req, res) => {
    console.log(req.body); // { name: 'lala' }
    res.json({
      code: 200,
      data: {
        ...req.body,
        ip: req.ip,
        account: 'xxx',
        token: 'yyy',
      },
    });
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
