import React from "react";
import './Footer.css';
import youtube_ico from '../../assets/youtube_icon.png';
import twitter_ico from '../../assets/twitter_icon.png';
import facebook_ico from '../../assets/facebook_icon.png';
import insta_ico from '../../assets/instagram_icon.png';

const Footer = () => (
    <div className="footer">
        <div className="footer-list"> 
            <img src={facebook_ico} alt=""/>
            <img src={insta_ico} alt=""/> 
            <img src={twitter_ico} alt=""/> 
            <img src={youtube_ico} alt=""/>
        </div>
        <ul>
            <li>Audio Description</li>
            <li>Help Centre</li>
            <li>Gift Cards </li>
            <li>Media Centre</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
        </ul>
    </div>
)

export default Footer;