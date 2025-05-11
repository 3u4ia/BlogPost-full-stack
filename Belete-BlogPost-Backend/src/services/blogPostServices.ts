import { BlogPost, BlogpostModel } from "../model";


export const getBlogPosts = async (): Promise<BlogPost[]> => {
	const result: BlogPost[] = await BlogpostModel.find()

	return result;
}

export const getBlogPost = async (id: string): Promise<BlogPost | null> => {
	const result: BlogPost | null = await BlogpostModel.findById(id)
	return result;
}

type CreateBlogPostProps = BlogPost & {
	id: never // Makes it so that if somepone passes it an error is thrown
}

export const createBlogPost = async (blogPost: CreateBlogPostProps) => {
	const newBlogPost = new BlogpostModel(blogPost);
	const result = await newBlogPost.save()
	return result;
}

export const deleteBlogPost = async(id: string): Promise<boolean> => {
	await BlogpostModel.findByIdAndDelete(id)

	return true;
}


export const editBlogPost = async (id: string, blogPost: CreateBlogPostProps) => {
	// runValidators makes update do a type check on the blogPost and returns an error page if not valid
	await BlogpostModel.findByIdAndUpdate(id, blogPost, { runValidators:  true})

	const result = await getBlogPost(id)
	return result
}