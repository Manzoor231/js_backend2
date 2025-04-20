import express from 'express';

const app = express();
// middleware and simple config
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({limit:"16kb"}));



export default app;