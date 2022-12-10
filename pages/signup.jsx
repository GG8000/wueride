import NavBar from "../components/navbar";
import TextField from "../components/textfield";
import Script from "next/script";
import Link from 'next/link';

export default function SignUp() {
    
    return(
        <div className="font-outfit">
            <NavBar/>
            <div className="pt-12 w-96 mx-auto">
                <TextField type="email" label="E-Mail-Adresse" id="email_input" icon="user"/>
                <TextField type="password" label="Passwort" id="pw_input" icon="pw"/>
                <div className="text-sm text-primary text-right w-80 mx-auto -mt-3">
                    <Link className=" text-primary text-opacity-30 hover:text-opacity-80" href="/notfound">Passwort vergessen?</Link>
                </div>
                <div className="w-80 mx-auto text-center py-4">
                    <Link href="/" >
                        <button className="btn--secondary w-44">Anmelden</button>
                    </Link>
                </div>
                <div className="text-xs text-primary text-center w-80 mx-auto -mt-3">
                    <Link className=" text-primary text-opacity-30 hover:text-opacity-80" href="/registration">Neu hier? Hier gehts zur Registrierung</Link>
                </div>
            </div>
        </div>
    )
};