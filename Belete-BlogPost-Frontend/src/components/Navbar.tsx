import { Link } from "react-router"
import Styles from './Navbar.module.css'

export const Navbar = () => {

    return(
        <div className={Styles.navbar}>
            <ul className={`flex space-x-4 ${Styles.navbarUl}`}>{/*space-x-4 is for space between. Flex just makes it into a row*/}
				
                <li>
                    <Link to='/'>
						<button className={Styles.navbarButton}>Home</button>
					</Link>
                    <Link to="/create">
                        <button className={Styles.navbarButton}>Create Blog</button>  
                    </Link>
                    
                    
                </li>
                
            </ul>
        </div>
    )
}