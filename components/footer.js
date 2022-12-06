import { IconContext } from 'react-icons';
import {AiFillInstagram} from 'react-icons/ai';
import {FaFacebookSquare, FaLinkedin} from 'react-icons/fa';

export default function Footer() {
    return(
        <div className="py-8">
            <div className="flex justify-center gap-4 text-primary"> 
                <p><a href="#">Über uns</a></p>
                <p><a href="#">Kontakt</a></p>
                <p><a href="#">Impressum</a></p>
                <p><a href="#">Datenschutz</a></p>
                <p><a href="#">FAQ</a></p>
                <p><a href="#">AGB</a></p>
            </div>
            <div className="bg-primary h-0.5 rounded-full w-40 mx-auto my-2"/>
            <IconContext.Provider value={{ color: "", className: "text-primary" }}>
            <div className="flex justify-center gap-4">
                <a href="#"><AiFillInstagram /></a>
                <a href="#"><FaFacebookSquare /></a>
                <a href="#"><FaLinkedin /></a>
            </div>
            </IconContext.Provider>
        </div>
        
    )
};