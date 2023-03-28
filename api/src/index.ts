import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { router } from './router';

mongoose.connect('mongodb://localhost:27017')
    .then( () => {
        const app = express();
        const port = 3030;

        app.use(express.json());
        app.use(cors());
        // app.use(express.urlencoded({ extended: false}));
        app.use(router);

        app.listen(port, () => console.log('Server is running on http://localhost:3030'));
    })
    .catch( () => console.log('Error to connect on mongodb'));



