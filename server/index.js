const app = require('express')();
const bodyParser = require('body-parser');
const Pusher = require('pusher');

const PORT = 3001;

app.use(bodyParser.json());

const pusher = new Pusher({
  appId: '',
  key: '',
  secret: '',
  encrypted: true,
});

app.post('/hooks/Message/created', (req, res) => {
  pusher.trigger('messages@foo', 'Message:created', req.body);
  res.send('OK');
});

app.post('/hooks/Message/created', (req, res) => {
  pusher.trigger('messages@foo', 'Message:created', req.body);
  res.send('OK');
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}.`));
