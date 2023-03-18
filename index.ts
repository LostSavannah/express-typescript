import express, {Express, Request, Response} from 'express';


const app:Express = express();

const port = 8082;

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Ready');
});

app.listen(port, () => {
    console.log(`🚀 [Server] Listening on ${port}`);
});