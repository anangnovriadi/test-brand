import express, { Application, Request, Response } from 'express';
import routes from './routes';
import { errorMiddleware } from './utils/errorMiddleware';

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `OK` })
});

app.use('/api', routes);
app.use(errorMiddleware);

try {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    })
} catch (error: any) {
    console.log(`Error occurred: ${error.message}`);
}

export default app;