import {BsFillMoonStarsFill} from 'react-icons/bs';
import Button from '../components/button';
import Link from 'next/link';

export default function NavBar() {
    return(
        <nav className='bg-white pt-5 pb-3 mb-1 flex justify-between px-5 sticky top-0 z-10'>
            <Link href="/">
                <div className='flex text-primary border-2 px-2 rounded-md'>
                    <h1 className='text-xl'>Wue</h1>
                    <h1 className='text-xl font-medium'>Ride</h1>
                </div>
            </Link>
            
            
            <ul className='flex items-center'>
                <li className='cursor-pointer text-xl px-5'>
                    <BsFillMoonStarsFill />
                </li>
                <li>
                    <Button text="Anmelden" appearance="nav-prime" linkTo="signup"/> 
                </li>
            </ul>
        </nav>
    )
};