import classes from "./NavBar.module.css"
import { Link } from "react-router-dom"
import logo from "../../Resources/IMDB_Logo_2016.svg.png"

const NavBar = () => {
    return (
            <div className={classes.outerDiv}>
                <Link index={+true} to="/imdb" style={{textDecoration: "none" , padding: "0.5rem"}}> <img src={logo} className={classes.logo} alt="logo"></img> </Link>
                <Link to="/movies/popular" style={{textDecoration: "none" , padding: "0.5rem"}}> <span> Popular </span> </Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none" , padding: "0.5rem"}}> <span> Top rated </span> </Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none" , padding: "0.5rem"}}> <span> Upcoming </span> </Link>
        </div>
    )
}

export default NavBar;