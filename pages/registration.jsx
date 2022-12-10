import NavBar from "../components/navbar";
import TextField from "../components/textfield";
import Link from 'next/link';
import { useState } from "react";

export default function Registration() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');


    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleFirstnameChange = (e) => {
        setFirstname(e.target.value);
        setSubmitted(false);
    }

    const handleLastnameChange = (e) => {
        setLastname(e.target.value);
        setSubmitted(false);
    }

    const handleBirthdateChange = (e) => {
        console.log(e.target.value);
        setBirthdate(e.target.value);
        setSubmitted(false);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        checkPW(password,passwordConf);
        setSubmitted(false);
    }

    const handlePasswordConfirmationChange = (e) => {
        setPasswordConf(e.target.value);
        checkPW(password,passwordConf);
        setSubmitted(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstname === '' || lastname === '' || birthdate === '' || email === '' || password === '' || passwordConf === '' || !checkPW) {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    }

    const checkPW = (pw, pwconf) => {
        if(pw === pwconf && pw.length > 8) {
            return true;
        } else {
            return false;
        } 
    }
    
    return(
        <div>
            <NavBar/>
            <div className="pt-12 w-96 mx-auto">
                <form>
                    
                <TextField onChange={handleFirstnameChange} type="text" label="Vorname" placeholder="Philonema" id="firstname_input"/>
                <TextField onChange={handleLastnameChange} type="text" label="Nachname" placeholder="Philosophie" id="lastname_input"/>
                <TextField onChange={handleBirthdateChange} type="date" label="Geburtsdatum" placeholder="23.12.1983" id="birth_input"/>
                <TextField onChange={handleEmailChange} type="email" label="E-Mail-Adresse" placeholder="name@wueride.de" id="email_input"/>
                <TextField onChange={handlePasswordChange} type="password" label="Passwort" placeholder="Xz89@1ffzgl1!_5x" id="pw_input" icon="pw"/>
                <TextField onChange={handlePasswordConfirmationChange} type="password" label="Passwort wiederholen" placeholder="Xz89@1ffzgl1!_5x" id="pw_conf_input" icon="pw"/>
                </form>
                <div className="w-80 mx-auto text-center py-4">
                    <Link href="/">
                        <button onClick={handleSubmit} className="w-44 btn--secondary">Registrieren</button>
                    </Link>
                    
                </div>
                <div className="text-xs text-primary text-center w-80 mx-auto -mt-3">
                    <Link className=" text-primary text-opacity-30 hover:text-opacity-80" href="/signup">Du hast schon einen Account? Melde dich hier an</Link>
                </div>
            </div>
        </div>
    )
};

