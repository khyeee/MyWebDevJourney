import { useState } from "react"
import clsx from 'clsx';

function Sandbox_LightSwitch(props) {
    const [lightOn, setLightOn] = useState(false);
    const lightStyle = lightOn ? 'bg-yellow-100' : 'bg-slate-600';
    return (
        <div className={clsx(
            'flex flex-col items-center justify-center h-screen',
            lightStyle
        )}>
            <button className={clsx(
                'w-6 h-8',
                 lightOn ? 'bg-slate-300' : 'bg-slate-200'
                )} 
                 onClick={() => setLightOn(true)}></button>
            <button className={clsx(
                'w-6 h-8',
                 lightOn ? 'bg-slate-200' : 'bg-slate-300'
                )}  onClick={() => setLightOn(false)}></button>
        </div>
    )
}

export default Sandbox_LightSwitch