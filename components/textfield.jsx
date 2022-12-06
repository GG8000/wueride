import Script from 'next/script';

export default function TextField(props) {
    
    return(
        <div>
            <div className="flex justify-center font-outfit">
                <div className="form-floating mb-3 w-80">
                    <label for={props.id} className="text-primary">{props.label}</label>
                    <input type={props.type} className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-primary
                    bg-white bg-clip-padding
                    border-2 border-primary border-opacity-50
                    rounded" id={props.id} placeholder={props.placeholder}/>
                </div>
            </div>
        </div>
    )
};