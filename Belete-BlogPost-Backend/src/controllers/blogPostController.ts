import { NextFunction, Request, Response } from "express";
import { getBlogPost, getBlogPosts, createBlogPost, deleteBlogPost, editBlogPost } from "../services/blogPostServices";

export const getBlogPostsController = async (req: Request, res: Response, next: NextFunction) => {
	const result = await getBlogPosts()
	res.send(result)
	next();
	return;
}


export const getBlogPostController = async (req: Request, res: Response, next: NextFunction) => {
	const id = (req.params.id);

	if(!id) {
		res.status(400).send('Invalid ID')
		next();
		return;
	}

	const result = await getBlogPost(id);

	if(!result) {
		res.status(404).send('Not found');
		next();
		return;
	}

	res.send(result)
	next();
	return;
}


export const createBlogPostController = async (req: Request, res: Response, next: NextFunction) => {
	const blogPost = req.body

	const result = await createBlogPost(blogPost)

	res.send({
		blogPost: result, 
		success: true,
		msg: ''
	})

	next();
	return;

}

export const deleteBlogPostController = async (req: Request, res: Response, next: NextFunction) => {
	const id = req.params.id;
	console.log('id', id);

	if(!id) {
		res.status(400).send('Invalid ID');
		next();
		return;
	}

	const result = await deleteBlogPost(id);

	if(result) {
		res.send('Success')
		next();
	} else {
		res.send('Not Found').status(404); 
		next();
	}
}

export const editBlogPostController = async (req: Request, res: Response, next: NextFunction) => {
	const id = req.params.id;
	const blogPost = req.body;



	if(!id) {
		res.status(400).send('Invalid ID');
		next();
		return;
	}

	const result = await editBlogPost(id, blogPost);

	if(result) {
		res.send(result)
		next()
	} else {
		res.send('Not Found').status(404); 
		next();
	}

}
