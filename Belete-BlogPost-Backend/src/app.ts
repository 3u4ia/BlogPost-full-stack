import express, { Request, Response } from 'express';
import cors from 'cors'
// TODO import routes
import { 
	getBlogPostsController, 
	getBlogPostController, 
	createBlogPostController,
	deleteBlogPostController,
	editBlogPostController
} from './controllers';
import { removePoweredByHeader } from './middleware';
import { blogPostRouter } from './routes';




const app = express();

app.use(cors());
app.use(express.json());

// Middleware
app.use(removePoweredByHeader)

// Routes
app.use('/blogpost', blogPostRouter);

// TODO remove testing pings
app.get('/ping', (req: Request, res: Response) => {
	res.send('pong')
});



export default app;