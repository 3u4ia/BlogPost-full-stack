import { useState } from "react"
import { useNavigate } from "react-router";
import axios from "axios"
import Styles from './CreateBlogPost.module.css'
interface HandleSaveProps {
	title: string,
	body: string,
	author: string,
}

//TODO if time allows separate this into view and businesslogic like in express-ui newProduct and newProductView

export const CreateBlogPage = () => {
	const navigate = useNavigate();

	const [title, setTitle] = useState<string>('');
	const [body, setBody] = useState<string>('');
	const [author, setAuthor] = useState<string>('');

	const saveEnabled = title !== '' && body !== '' && author !== '';

	const handleSave = async ({
		title,
		body,
		author,
	}: HandleSaveProps) => {
		const url = 'http://localhost:3000/blogpost'
		await axios.post(url, {
			title,
			body,
			author,
		})

		navigate("/")

	}

	return(
		<div className={Styles.createBlog}>
			<div>
				<input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
			</div>
			<div>
				<input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)}/>
			</div>
			<div style={{height: '100%'}}>
				<textarea className={Styles.createBody} placeholder="Body" onChange={(e) => setBody(e.target.value)}/>
			</div>
			
			<div>
				<button className={Styles.saveButton} onClick={() => handleSave({
					title,
					body,
					author,
				})} disabled={!saveEnabled}>Save</button>
			</div>

		</div>
	)
}