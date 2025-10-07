import { useState } from "react";
import clsx from "clsx";

const PALLETE = [
    'bg-blue-400',
    'bg-red-400',
    'bg-green-400',
    'bg-orange-400',
    'bg-stone-400'
];

function Sandbox_Carousel_2(props){
    const [imgIndex, setImgIndex] = useState(0);

    return (
        <div className="flex bg-white justify-center items-center">
            <button className="bg-blue-400 w-4 h-4 rounded-lg">
                {'<'}
            </button>
            <div className="flex flex-col items-center justify-center">
                <div className={clsx(
                    'rounded-t-lg w-[100px] h-[80px]', 
                    'bg-red-400'
                )}>
                </div>
                <div className="flex">
                    <div className="flex flex-col p-2">
                        <p>Name</p>
                        <p>Colour</p>
                        <p>Some Text</p>
                    </div>
                    <div className="flex flex-col m-2 p-2">
                        <p>Name</p>
                        <p>Colour</p>
                        <p>Some Text</p>
                    </div>
                </div>
            </div>
            <button className="bg-blue-400 w-4 h-4 rounded-lg">
                {'>'}
            </button>
        </div>
    )
}

export default Sandbox_Carousel_2