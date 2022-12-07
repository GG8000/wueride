import NavBar from "../components/navbar";
import TextField from "../components/textfield";
import Button from "../components/button";
import Link from 'next/link';

export default function Registration() {
    return(
        <div>
            <NavBar/>
            <div className="pt-12 w-96 mx-auto">
                <TextField type="text" label="Vorname" placeholder="Philonema" id="firstname_input" width="full"/>
                <TextField type="text" label="Nachname" placeholder="Philosophie" id="lastname_input" width="full"/>
                <TextField type="date" label="Geburtsdatum" placeholder="23.12.1983" id="birth_input" width="full"/>
                <TextField type="email" label="E-Mail-Adresse" placeholder="name@wueride.de" id="email_input" width="full"/>
                <TextField type="password" label="Passwort" placeholder="Xz89@1ffzgl1!_5x" id="pw_input" width="full"/>
                <TextField type="password" label="Passwort wiederholen" placeholder="Xz89@1ffzgl1!_5x" id="pw_conf_input" width="full"/>
                <div className="w-80 mx-auto text-center py-4">
                    <Button text="Registrieren" appearance="secondary" linkTo="/notfound"/>
                </div>
                <div className="text-xs text-primary text-center w-80 mx-auto -mt-3">
                    <Link className=" text-primary text-opacity-30 hover:text-opacity-80" href="/signup">Du hast schon einen Account? Melde dich hier an</Link>
                </div>
            </div>
        </div>
    )
};