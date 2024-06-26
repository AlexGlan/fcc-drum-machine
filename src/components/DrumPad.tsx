import { useRef, useState } from 'react';
import '../styles/DrumPad.scss';

type DrumPadProps = {
    keyCap: string,
    name: string,
    audio: string,
    power: boolean,
    volume: number,
    lastPlayed: (msg: string) => void
}

const DrumPad = ({ keyCap, name, audio, power, volume, lastPlayed }: DrumPadProps): JSX.Element => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isActive, setActive] = useState(false);

    const playAnimation = (): void => {
        setActive(!isActive);
        setTimeout(() => { setActive(prevValue => !prevValue); }, 100); 
    }

    const playAudio = (): void => {        
        if (audioRef.current && power) {
            playAnimation();
            audioRef.current.currentTime = 0;            
            audioRef.current.volume = volume;
            audioRef.current.play();  
            lastPlayed(name.replace(/-/, ' '));      
        } else {
            playAnimation();
            return;
        }      
    }
        
    return (    
        <div
            onClick={ () => { playAudio(); } }
            id={name}
            className={
                isActive 
                    ?  power
                        ? 'drum-pad active'
                        : 'drum-pad active-no-power'                
                    : 'drum-pad'
            }            
        >
            <span>{keyCap}</span>
            <audio
                ref={audioRef}
                src={audio}
                className='clip'
                id={keyCap}
            ></audio>
        </div>
    )
}

export default DrumPad;