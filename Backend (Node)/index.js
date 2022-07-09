const Express = require('express');
const app = new Express();
require('dotenv/config');
const getRouter = require('./routes/getRouter');
const postRouter = require('./routes/postRouter');
const patchRouter = require('./routes/patchRouter');
const deleteRouter = require('./routes/deleteRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());


app.use(bodyParser.json());

mongoose.connect(process.env.DB_URL, () => {
    console.log("Successfully connected the database..");
})

app.use('/users', getRouter);
app.use('/addData', postRouter);
app.use('/updateUser', patchRouter);
app.use('/remove', deleteRouter);


app.listen(4000, () => {
    console.log("Server is running at port 4000");
})