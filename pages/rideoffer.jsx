import NavBar from "../components/navbar";
import Link from "next/link";

export default function RideOffer() {

    return(
        <div className="font-outfit">
            <NavBar/>
            <div className="bg-primary h-52 w-full"/>
            <div className=" bg-white h-72 w-96 mx-auto rounded-lg shadow-lg relative -top-4 ">
                <div className="flex justify-center gap-10">
                    <button className=" text-primary font-bold pt-2 px-2 rounded-full">Fahrt anbieten</button>
                    <Link href="ridesearch" className=" text-primary opacity-50 font-bold pt-2 px-2">Fahrt suchen</Link>
                </div>
                <div className="w-80 mx-auto">
                    <div className="text-left">
                        <label className="text-primary text-sm">Startpunkt</label>
                        <input className="shadow-sm text-sm pl-2 border-primary border-2 rounded-lg w-full h-8" type="text" placeholder="Kitzingen"/>
                    </div>
                    <div className="text-left">
                        <label className="text-primary text-sm">Endpunkt</label>
                        <input className="shadow-sm text-sm pl-2 border-primary border-2 rounded-lg w-full h-8" type="text" placeholder="Hubland-Nord"/>
                    </div>
                    <div className="flex gap-10">
                        <div className=" flex flex-col">
                            <label className="text-primary text-sm">Uhrzeit</label>
                            <input className="shadow-sm text-xs text-primary border-primary border-2 rounded-lg w-24 h-8" type="date"/>
                        </div> 
                        <button className="text-center bg-white text-primary border-primary border-2 rounded-full h-8 px-2 mt-5">Zwischenstopp</button>
                    </div>
                    <button className="text-center bg-primary w-40 text-white rounded-full mx-20 mt-4">Fahrt anbieten</button>
                </div>
            </div>
        </div>
    )
};