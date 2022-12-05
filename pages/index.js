import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Image from 'next/image';
import icon_car_image from "../public/icon_ride_sharing.png";
import umfrage from "../public/umfrage.png";
import hands from "../public/hands.png";
import clock from "../public/time_clock.png";
import people from "../public/more_people.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>RideSharing Campus Hubland</title>
        <meta name="description" content="Use Ridesharing for getting to University" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main className='bg-white font-outfit'>
        <section className='min-h-screen'>
          <nav className='py-5 mb-1 flex justify-between px-5'>
            <h1 className=' text-xl'>WueRide</h1>
            <ul className='flex items-center'>
              <li>
              <a className='bg-primary text-white px-4 py-1 rounded-md' href="#">Anmelden</a>
              </li>
              <li className='cursor-pointer text-xl px-5'>
                <BsFillMoonStarsFill />
              </li>
            </ul>
          </nav>
          <div className='text-center bg-primary'>
            <div className='relative w-80 mx-auto py-4'>
              <Image src={icon_car_image} />
            </div>
            <h1 className='text-2xl text-white pb-4' >RideSharing am Campus Hubland</h1>
            <div className='flex justify-between items-center text-center px-10 pb-5'>
              <a className='bg-white border-white border-2 text-primary text-sm px-4 py-1 rounded-md w-1/2 mx-2' href="#">Mitfahren</a>
              <a className=' border-white border-2 text-white text-sm px-4 py-1 rounded-md w-1/2 mx-2' href="#">Fahrt anbieten</a>
            </div>
          </div>
          <div className='pb-8'>
            <h2 className='text-primary py-5 text-center text-lg'>Warum RideSharing am Campus Hubland?</h2>
            <p className='text-center max-w-xl mx-auto px-5'>Eine nicht-repräsentative Umfrage hat gezeigt, dass ein Drittel der befragten Studierenden am Campus Hubland der JMU Würzburg fast täglich mit dem Auto zur Universität fährt</p>
            <div className='mx-auto px-10 max-w-lg'>
                <Image src={umfrage}/>
            </div>
          </div>
          <div className='bg-primary max-w my-4'>
          <h2 className='text-center text-white py-0-4'>Welche Vorteile bietet WueRide?</h2>
          </div>
          <div>
            <div className='flex justify-evenly text-primary px-8'>
              <div className='px-2'>
                <Image src={hands} />
                <p>Umweltfreundlich</p>
              </div>
              <div className='px-2'>
                <Image src={people} />
                <p>Lerne neue Menschen kennen</p>
              </div>
              <div className='px-2'>
                <Image src={clock} alt="time"/>
                <p>Zeitersparnis</p>
              </div>
            </div>
          </div>
          <div className='bg-primary h-40'>
            
          </div>
        </section>
      </main>
    </div>
  )
}
