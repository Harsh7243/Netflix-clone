import './Navbar.css';
import Logo from '../../assets/logo.png';
import Search from '../../assets/search_icon.svg';
import Bell from '../../assets/bell_icon.svg';
import Profile from '../../assets/profile_img.png';
import Down_arr from '../../assets/caret_icon.svg';
import { useState, useEffect } from 'react';
import { logout } from '../../firebase';

const Navbar = () => {
    const[scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll= () => {
            setScrolled(window.scrollY > 50)
        };
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        };
    },[]);

    return(
        <div className= {scrolled === true ? "navbar transition-all duration-500 bg-zinc-900":"navbar transition-all duration-500"}>
            <div className="Nav-left">
                <img src={Logo} alt="Netflix logo"/>    
                <ul>
                    <li>Home</li>
                    <li>TV shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className="Nav-right">
                <img src={Search} alt="search" className='icons'/>
                <p>Children</p>
                <img src={Bell} alt="notifications" className='icons'/>
                <div className="Nav-pro">
                    <img src={Profile} alt="Profile" className='profile'/>
                    <img src={Down_arr} alt="Dropdown"/>
                    <div className='dropdown'>
                        <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;