import Link from 'next/link';

export default function Button(props) {

    if(props.appearance == "primary") {
        return(
            <div className='font-outfit'>
                 <Link href={props.linkTo}>
                    <div className='bg-white border-white border-2 text-primary text-center text-sm px-4 py-1 rounded-full w-30 mx-2'>
                        {props.text}
                    </div>
                </Link>
            </div>
        )
    } else if (props.appearance == "secondary") {
        return(
            <div className='font-outfit'>
                 <Link href={props.linkTo}>
                    <div className='bg-primary border-white border-2 text-white text-sm px-4 py-1 rounded-full w-30 mx-2'>
                        {props.text}
                    </div>
                </Link>
            </div>
        )
    } else if(props.appearance =="nav-prime") {
        return(
            <div className='font-outfit'>
                <a href={props.linkTo}>
                    <div className='bg-primary text-white px-4 py-1 rounded-full'>
                        {props.text}
                    </div>
                </a>
            </div>
        )
    } else if(props.appearance == "nav-sec") {
        return(
            <div>
                <Link href={props.linkTo}>
                    <div className='bg-primary border-white border-2 text-white text-sm px-4 py-1 rounded-full w-1/2 mx-2'>
                        {props.text}
                    </div>
                </Link>
            </div>
        )
    }


    
};