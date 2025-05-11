// * FINISHED

import { model, Schema } from "mongoose";

export interface BlogPost {
	title: string
	body: string
	author: string
	date: Date
}



const BlogPostSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	Date: {
		type: Date,
		default: Date.now

	},
	
})

export const BlogpostModel = model('BlogPost', BlogPostSchema);