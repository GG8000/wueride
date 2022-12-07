import Button from "../components/button";
import NavBar from "../components/navbar";
import TextField from "../components/textfield";

export default function RideSearch() {
    return(
        <div className="font-outfit">
            <NavBar/>
            <div className="bg-primary h-52 w-full"/>
            <div className=" bg-white h-72 w-96 mx-auto rounded-lg shadow-lg relative -top-4 ">
                <h1 className=" text-primary font-bold ml-8 pt-2">Fahrt anbieten</h1>
                <TextField type="text" id="startlocation_input" placeholder="z.B. Würzburg-Zellerau" label="Startpunkt" width="full"/>
                <TextField type="text" id="endlocation_input" placeholder="Hubland-Nord" label="Endpunkt" width="full"/>
                <div className=" flex ml-8">
                    <TextField type="time" id="startlocation_input" placeholder="" label="Uhrzeit"/>
                    <button className="text-primary text-sm border-primary text-opacity-30 border-2 border-opacity-30 relative -left-32 top-6 px-4 rounded-full h-8 hover:text-opacity-100 hover:border-opacity-100">Zwischenstopp</button>
                </div>
                <div className="text-center w-40 mx-auto">
                    <Button text="Fahrt anbieten" appearance="secondary" linkTo="#"/>
                </div>
            </div>
        </div>
    )
};