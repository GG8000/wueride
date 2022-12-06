import Image from "next/image";

export default function TestiCard() {
    return(
        <div className=" bg-gradient-to-b from-primary to-white w-70 h-40  mx-auto rounded-lg">
            <div className="flex-row">
            <Image className='py-3 mx-auto' src="/../public/profile_pics/Person_2.png" alt = "Profile" width="50" height="50"/>
            <Image className='mx-auto' src="/../public/Bewertung.png" alt = "stars" width="50" height="10"/>
            <p className="text-primary text-xs text-center px-5 py-4 ">Top App. Könnte etwas schöner designt sein. Sonst alles super. Empfehle sie gerne weiter.</p>
            </div>
        </div>
    )
};