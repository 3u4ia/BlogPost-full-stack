import Styles from './BlogPost.module.css'
import deleteLogo from '../assets/delete-svgrepo-com.svg'
interface BlogPostProps {
	title: string,
	body: string,
	author: string,

}

export const BlogPost = ({
	title,
	body,
	author,
}: BlogPostProps) => {
	


	return (
		<div className={Styles.blogPost}>
			<div style={{width: "100%", right: "0px", position: "relative"}}>
				<button className={Styles.deleteButton}><img src={deleteLogo} alt="delete" width="20" className={Styles.deleteSVG}/></button>
			</div>
			<h1>{title}</h1>
			<h3>Author: {author}</h3>
			<p>{body}</p>

			
		</div>
	)
}