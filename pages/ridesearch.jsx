import Button from "../components/button";
import NavBar from "../components/navbar";
import TextField from "../components/textfield";
import { useState } from 'react'; 
import Link from 'next/link';

export default function RideSearch() {

    const [inputFields, setInputFields] = useState([
        {startpoint: "", endpoint: "", date:""}
    ])
    return(
        <div className="font-outfit">
            <NavBar/>
            <div className="bg-primary h-52 w-full"/>
            <div className=" bg-white h-72 w-96 mx-auto rounded-lg shadow-lg relative -top-4 ">
                <div className="flex justify-center gap-10">
                    <Link href="rideoffer" className=" text-primary font-bold pt-2 opacity-50 px-2">Fahrt anbieten</Link>
                    <button className=" text-primary font-bold pt-2 px-2">Fahrt suchen</button>
                </div>
                <div className="w-80 mx-auto">
                <div className="text-left">
                    <label className="text-primary text-sm">Startpunkt</label>
                    <input className="pl-2 text-sm shadow-sm border-primary border-2 rounded-lg w-full h-8 placeholder" type="text" placeholder="Kitzingen"/>
                </div>
                <div className="text-left">
                    <label className="text-primary text-sm">Endpunkt</label>
                    <input className="pl-2 text-sm shadow-sm border-primary border-2 w-full rounded-lg h-8" type="text" placeholder="Hubland-Nord"/>
                </div>
                <div className="flex gap-10">
                    <div className=" flex flex-col">
                        <label className="text-primary text-sm">Uhrzeit</label>
                        <input className="pl-2 text-sm shadow-sm border-primary border-2 w-full rounded-lg h-8" type="date"/>
                    </div> 
                    <button className="text-center bg-white text-primary border-primary border-2 rounded-full h-8 px-2 mt-5">Zwischenstopp</button>
                </div>
                <button className="text-center bg-primary w-40 text-white rounded-full mx-20 mt-4">Fahrt suchen</button>
            </div>
            </div>
        </div>
    )
};