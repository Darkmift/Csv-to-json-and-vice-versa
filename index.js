import express from 'express';
import mainRouter from './main.routes.js';
import fileUpload from 'express-fileupload';

const app = express()
const port = 3000;

app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));

app.use(express.json())

app.use('/api', mainRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})