import express from 'express';
import apolloServer  from './graphql';

const app = express();

apolloServer.applyMiddleware({
    app,
});


export default app;