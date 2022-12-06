import NavBar from "../components/navbar";
import TextField from "../components/textfield";
import Script from "next/script";
import Link from 'next/link';
import Button from "../components/button";

export default function SignUp() {
    
    return(
        <div className="font-outfit">
            <NavBar/>
            <div className="pt-12">
            <TextField type="email" label="E-Mail-Adresse" placeholder="name@wueride.de" id="email_input"/>
            <TextField type="password" label="Passwort" placeholder="Xz89@1ffzgl1!_5x" id="pw_input"/>
            <div className="text-sm text-primary text-right  w-96 -mt-2">
                <Link className=" text-primary text-opacity-30 hover:text-opacity-80" href="/notfound">Passwort vergessen?</Link>
            </div>
            <div className="w-80 mx-auto text-center py-4">
                <Button text="Anmelden" appearance="secondary" linkTo=""/>
            </div>
            
            </div>
        </div>
        )
};