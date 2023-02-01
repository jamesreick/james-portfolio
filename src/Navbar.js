import { Link } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react'

const Navbar = () => {

function show(){
    document.getElementById('sidebar').classList.toggle('active');
}

    return ( 
        <nav>
            <div id="sidebar"className="navbar">
                <div className="hamburger" onClick={show}>
                    <Hamburger />
                </div>
                    <div className="links">
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/work'>Work</Link>
                    </div>
                    <div className="link-assets">
                    </div>
                </div>
        </nav>

     )
}
 
export default Navbar;