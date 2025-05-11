import Styles from './BlogPost.module.css'
import deleteLogo from '../assets/delete-svgrepo-com.svg'
import { useState } from 'react'
interface BlogPostProps {
	title: string,
	body: string,
	author: string,
	handleDelete: (id: string) => void

}

export const BlogPost = ({
	title,
	body,
	author,
	handleDelete
}: BlogPostProps) => {
	const [showChickenTest, setShowChickenTest] = useState(false);

	


	return (
		<div className={Styles.blogPost}>
			<div style={{width: "100%", right: "0px", position: "relative"}}>
				<button className={Styles.deleteButton} onClick={() => setShowChickenTest(true)}><img src={deleteLogo} alt="delete" width="20" className={Styles.deleteSVG}/></button>
				{showChickenTest && (
					<div>
						<p>Are you sure you'd like to delete this?</p>
						<button className={Styles.chickenButtons} onClick={handleDelete}>Yes</button>
						<button className={Styles.chickenButtons} onClick={() => setShowChickenTest(false)}>Cancel</button>
					</div>
				)}
			</div>
			<h1>{title}</h1>
			<h3>Author: {author}</h3>
			<p>{body}</p>

			
		</div>
	)
}