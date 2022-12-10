import Script from 'next/script';
import {FaUserAlt} from 'react-icons/fa';
import {AiFillEyeInvisible} from 'react-icons/ai';
import {AiFillEye} from 'react-icons/ai';
import { useState } from 'react';


//props: id type label placeholder width
export default function TextField({id, type, label, icon, onChange}) {

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(current => !current);
    }


    switch (icon) {
        case "user": 
            icon = <FaUserAlt className='disabled'/>
            break;
        case "pw":
            if(showPassword) {
                icon = <AiFillEyeInvisible/>
                type ="text"
            }
            else {
                icon = <AiFillEye/>
                type = "password";
            }
            
            break;
        default:
            icon = <></>
            break;
    }

    if(label=="Geburtsdatum") {
        label=" Geburtsdatum (tt.mm.jjjj)";
    }

        return(
            <div>
                <div className="flex justify-center font-outfit">
                    <div className="form-floating mb-3 w-80 relative">
                        <button onClick={togglePassword} className='text-primary absolute right-2 top-2 '>
                            {icon}
                        </button>
                        <input type={type} className='form-control
                        block
                        py-1.5
                        w-full
                        h-8
                        text-opacity-80
                        text-primary
                        focus:text-primary
                        bg-white bg-clip-padding
                        border-b-2 border-primary border-opacity-50'
                        onChange={onChange}
                        id={id} 
                        placeholder={label}
                        />
                    </div>
                </div>
            </div>
        )
};