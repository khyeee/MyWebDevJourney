import { useState } from "react";
import clsx from "clsx";

const PALLETE = [
    'bg-blue-400',
    'bg-red-400',
    'bg-green-400',
    'bg-orange-400',
    'bg-stone-400'
];

function Sandbox_ImageCarousel(props) {
    const [colorIndex, setColorIndex] = useState(0);

    return (
        <div className="flex justify-center items-center h-screen bg-slate-300">
            <button className="text-center bg-sky-400 h-8 w-8 rounded-full border border-black" 
                    onClick={() => {
                        colorIndex > 0? setColorIndex(colorIndex - 1) : setColorIndex(0);
                    }}>{"<"}</button>
            <div className="flex flex-col items-center m-8">
                <p>{`Color Pallete Number: ${colorIndex + 1}`}</p>
                <div className={clsx(
                    "w-[200px] h-[300px] m-4 rounded-lg border-2 border-black",
                    PALLETE[colorIndex]
                )}></div>
            </div>
            
            <button className="text-center bg-sky-400 h-8 w-8 rounded-full border border-black"
                    onClick={() => {
                        colorIndex < PALLETE.length - 1 ? setColorIndex(colorIndex + 1) : setColorIndex(PALLETE.length - 1);
                    }}>{">"}</button>
        </div>
    )
}

export default Sandbox_ImageCarousel
