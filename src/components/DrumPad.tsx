import { useEffect, useRef, useState } from 'react';
import '../styles/DrumPad.scss';

type DrumPadProps = {
    keyCap: string,
    name: string,
    audio: string,
    power: boolean
}

const DrumPad = ({ keyCap, name, audio, power }: DrumPadProps): JSX.Element => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isActive, setActive] = useState(false);

    const playAnimation = (): void => {
        setActive(!isActive)
        setTimeout(() => { setActive((prevValue) => !prevValue); }, 100); 
    }

    const playAudio = (): void => {        
        if (!power) {
            return;            
        }else  if (audioRef.current) {            
            playAnimation();
            audioRef.current.currentTime = 0;
            audioRef.current.play();            
        }       
    }

    const handleKeyDown = (e: KeyboardEvent): void => {
        if (e.key === keyCap.toLowerCase()) {            
            playAudio();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);    
            
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [power])
        
    return (
        <div
            onClick={ () => { playAudio(); } }
            className={ isActive ? 'drum-pad active' : 'drum-pad' }
            id={name}
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