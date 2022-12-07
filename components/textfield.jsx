import Script from 'next/script';
//props: id type label placeholder width
export default function TextField(props) {
    
    if(props.width == "full")
    {
        return(
            <div>
                <div className="flex justify-center font-outfit">
                    <div className="form-floating mb-3 w-80">
                        <label for={props.id} className="text-primary">{props.label}</label>
                        <input type={props.type} className="form-control
                        block
                        px-3
                        w-full
                        py-1.5
                        h-8
                        text-opacity-80
                        text-primary
                        focus:text-primary
                        bg-white bg-clip-padding
                        border-2 border-primary border-opacity-50
                        rounded" id={props.id} placeholder={props.placeholder}/>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div>
                <div className="flex justify-center font-outfit">
                    <div className="form-floating mb-3 w-80">
                        <label for={props.id} className="text-primary">{props.label}</label>
                        <input type={props.type} className="form-control
                        block
                        px-3
                        w-1/2
                        py-1.5
                        h-8
                        text-opacity-80
                        text-primary
                        focus:text-primary
                        bg-white bg-clip-padding
                        border-2 border-primary border-opacity-50
                        rounded" id={props.id} placeholder={props.placeholder}/>
                    </div>
                </div>
            </div>
        )
    }
};