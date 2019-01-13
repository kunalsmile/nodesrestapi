import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

var app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
  useNewUrlParser: true
});

//bodyparser setup
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

routes(app);

// Serving static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`Server is running at ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running at ${PORT}`);
});