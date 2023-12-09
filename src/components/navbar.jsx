import { Link } from "react-router-dom"
import "../styles.css"
const NavBar=()=>{
    return(
        <>
        <div className="nav">
            <h1 className="homenav"><Link className="navlink" to="/">Home</Link></h1>
            <h1 className="bookmarksnav"><Link className="navlink" to="/bookmarks">Bookmarks</Link></h1>
        </div>
        </>
    )
}

export default NavBar;