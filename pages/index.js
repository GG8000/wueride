import Head from 'next/head';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';
import icon_car_image from "../public/icon_ride_sharing.png";
import umfrage from "../public/umfrage.png";
import hands from "../public/hands.png";
import clock from "../public/time_clock.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>RideSharing Campus Hubland</title>
        <meta name="description" content="Use Ridesharing for getting to University" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className='bg-white font-outfit'>
        <NavBar/>
        <section className=''>
          <div className='sm:flex sm:flex-row-reverse sm:justify-center text-center sm:text-left bg-primary'>
            <div className='relative w-80 mx-auto py-4'>
              <Image src={icon_car_image} alt="car"/>
            </div>
            <div className='sm:my-auto sm:mx-auto sm:pl-12'>
              <h1 className='text-2xl text-white pb-4' >RideSharing am Campus Hubland</h1>
              <div className='flex justify-center items-center text-center px-10 pb-5'>
                <button className='btn--primary'>Mitfahren</button>
                <button className='btn--secondary'>Fahrt suchen</button>
              </div>
            </div>
          </div>
          </section>

          <section className=''>
          <div className='pb-8'>
            <h2 className='text-primary py-5 text-center text-lg'>Warum RideSharing am Campus Hubland?</h2>
            <div className='sm:flex sm:justify-center'>
              <p className='text-center sm:text-left max-w-xl  px-5 sm:my-auto'>Eine nicht-repräsentative Umfrage hat gezeigt, dass ein Drittel der befragten Studierenden am Campus Hubland der JMU Würzburg fast täglich mit dem Auto zur Universität fährt</p>
              <div className='px-10 max-w-lg'>
                  <Image src={umfrage} alt="Umfrage"/>
              </div>
            </div>
          </div>
          <div className='bg-primary max-w my-4 py-4'>
            <h2 className='text-center text-white py-0-4'>Welche Vorteile bietet WueRide?</h2>
          </div>
          <div>
            <div className='flex gap-4 justify-center text-center text-primary p-8'>
              <div>
                <Image className='mx-auto h-auto w-auto' src={hands} alt="Hände"/>
                <p>Umweltfreundlich</p>
              </div>
              <div>
                <Image className='mx-auto h-auto w-auto' src="/../public/more_people.png" width="200" height="200" alt="Menschen" />
                <p>Lerne neue Menschen kennen</p>
              </div>
              <div>
                <Image className='mx-auto h-auto w-auto' src={clock} alt="time"/>
                <p>Zeitersparnis</p>
              </div>
            </div>
          </div>
          <Footer/>
          
        </section>
      </main>
    </div>
  )
}
